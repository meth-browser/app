/*
 * The default preload script for each Dapp browser tab.
 *
 * This will setup the web3 instance for any Dapp running in the page.
 */
const { ipcRenderer: ipc } = require('electron')
const IPC = require('../../common/constants/ipc')


/* Setup web3 */

const pendingRequests = {}

class Web3IpcProvider {
  isConnected () {
    return true
  }

  send () {
    throw new Error('Synchronous web3 calls are not supported. Please use the async versions, they are better!')
  }

  sendAsync (payload, callback) {
    const id = `${Date.now()}-${Math.random()}`

    new Promise((resolve, reject) => {
      pendingRequests[id] = { resolve, reject }

      ipc.sendToHost(IPC.WEBVIEW, { id, type: IPC.WEB3, payload })
    })
      .catch(callback)
      .then(response => {
        const hasError = [].concat(response).find(r => !!r.error)

        if (hasError) {
          callback(new Error(response.error))
        } else {
          callback(null, response)
        }
      })
  }
}

window.web3 = {
  currentProvider: new Web3IpcProvider()
}


// When we receive an IPC request
ipc.on(IPC.WEBVIEW, (e, { id, error, response }) => {
  // find which request it was for, and respond to that request
  const req = pendingRequests[id]

  if (req) {
    pendingRequests[id] = null

    if (error) {
      req.reject(error)
    } else {
      req.resolve(response)
    }
  }
})
