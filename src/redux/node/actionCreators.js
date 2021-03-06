import { createActionCreator } from '../utils'

import {
  DISCONNECT_NODE,
  NODE_CONNECTED,
  NODE_CONNECT_ERROR,
  NODE_CONNECTING,
  CONNECT_NODE,
  NODE_DISCONNECTED,
  NEW_BLOCK,
  SYNCING,
  INJECT_LAST_CONNECTED_NODE
} from './actions'

export const injectLastConnectedNode = createActionCreator(INJECT_LAST_CONNECTED_NODE)

export const disconnectNode = createActionCreator(DISCONNECT_NODE)

export const connectNode = createActionCreator(CONNECT_NODE, (id, url) => ({ id, url }))

export const nodeConnectError = createActionCreator(NODE_CONNECT_ERROR)

export const nodeConnected = createActionCreator(NODE_CONNECTED)

export const nodeConnecting = createActionCreator(NODE_CONNECTING)

export const nodeDisconnected = createActionCreator(NODE_DISCONNECTED, reason => ({
  reason
}))

export const notifyNewBlock = createActionCreator(NEW_BLOCK)

export const notifySyncing = createActionCreator(SYNCING)
