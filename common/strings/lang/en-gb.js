const { ALL_ADDRESSES } = require('../../constants/dappPermissions')
const ADDRESS_TYPES = require('../../constants/addressTypes')
const { TRANSACTION_TYPE } = require('../../constants/protocol')
const { appName } = require('../../../buildConfig.json')

module.exports = {
  label: 'English',
  strings: {
    appName: 'Meth',
    initializing: 'Initializing',
    menu: {
      application: 'Application',
      about: 'About Meth',
      devTools: 'Developer tools',
      activeTabDevTools: 'Developer tools (browser tab)',
      reload: 'Reload',
      quit: 'Quit',
      edit: 'Edit',
      developer: 'Developer',
      undo: 'Undo',
      redo: 'Redo',
      cut: 'Cut',
      copy: 'Copy',
      paste: 'Paste',
      selectAll: 'Select all',
      browser: 'Browser',
      newTab: 'Open new tab',
      reloadTab: 'Reload current tab',
      closeTab: 'Close current tab',
      editUrl: 'Edit current tab URL',
      previousTab: 'Goto previous tab',
      nextTab: 'Goto next tab'
    },
    network: {
      chainId: 'ChainId',
      syncing: 'Sync',
      block: 'Block',
      sync: {
        percent: '{percent}%'
      },
      ethWarning: 'Reminder: you are NOT connected to the main Ethereum network, please do not use real ETH!'
    },
    error: {
      userCancelledDataSigning: 'User cancelled data signing',
      userCancelledTransaction: 'User cancelled transaction',
      unableToConnect: 'Unable to connect',
      requestTimeout: 'Request timed out',
      methodCall: 'Error calling method: {method}',
      unexpected: 'Unexpected error!',
      unexpectedPleaseRestart: 'Unexpected error. Please restart the app!',
      transactionAlreadyInProgress: 'A transaction is already in progress',
      signingAlreadyInProgress: 'Data signing is already in progress',
      connectionError: 'There was a connection error',
      tokenAlreadyExists: 'Token already exists',
      tokenContractNotFound: 'Valid token contract not found',
      unableToEstimateGas: 'Unable to estimate gas',
      unableToGenerateRawTx: 'Unable to generate raw transaction',
      unableToGenerateSignedData: 'Unable to sign data'
    },
    home: {
      intro2: 'Let\'s get your wallet setup so that you can start using Ethereum.',
      doesNotSupportWalletTypes: `${appName} does not currently support Keystore files, Ledger Nano, etc but will soon, stay tuned!`
    },
    mnemonic: {
      intro1: 'We have generated a passphrase for you.',
      intro2: 'Make sure you write this down carefully as it cannot be recovered once lost!',
      pleaseConfirmYourMnemonic: 'Please confirm your passphrase.',
      letsMakeSureYouHaveItCorrect: 'Lets make sure you have written it down correctly.',
      putWordsInRightOrder: 'Put the words in the right order.',
      enterYourMnemonic: 'Please enter your passphrase.',
      pleaseNoteDownThisMnemonicOnPaperOffline: 'Please remember this passphrase carefully! We recommend you either memorise it thoroughly or write it down offline, on a piece of paper or something similarly secure. If you lose it you will never again be able to access your accounts! Neither we nor anyone else will be able to help you retrieve your passphrase if you forget it!',
      wordOrderStillIncorrect: 'Please put the words in the correct order!',
      inputPlaceholderText: 'separate each word by a space ...'
    },
    log: {
      tab: {
        alerts: 'Alerts',
        log: 'Log'
      },
      noAlertsYet: 'No alerts yet!',
      numUnseenAlerts: 'There are {num} new alerts'
    },
    tooltip: {
      setMaximumAmount: 'Set maximum amount',
      logAlerts: 'Alerts',
      showConnectionInfo: 'Show connection info',
      logout: 'Logout'
    },
    toast: {
      copiedToClipboard: 'Copied to clipboard',
      pinSetupSuccessfully: 'Code setup successfully',
      newAccountGenerated: 'New account generated',
      addressSaved: 'Entry saved',
      addressDeleted: 'Entry deleted',
      bookmarkSaved: 'Bookmark saved',
      bookmarkDeleted: 'Bookmark deleted',
      customTokenAdded: 'Custom token added',
      customTokenUpdated: 'Custom token updated',
      customTokenDeleted: 'Custom token deleted'
    },
    button: {
      haveKeystoreFileLedgerNano: 'I want to use a keystore file, Ledger nano, etc.',
      alreadyHavePasswordLogin: 'I already have a wallet passphrase',
      goBack: 'Go back',
      getUpdate: 'Get update',
      convertUnits: 'Convert units',
      copyToClipboard: 'Copy to clipboard',
      setMax: 'Set max',
      executeLocalContractCall: 'Execute (via local call)',
      executeTransactionContractCall: 'Execute (via transaction)',
      viewTransactions: 'View transactions',
      transactionHistory: 'Transaction history',
      addToAddressBook: 'Add new address',
      addAccount: 'Add account',
      generateAccount: 'Generate account',
      addToken: 'Add token',
      addAddress: 'Add address',
      addCustomToken: 'Add custom token',
      editCustomToken: 'Edit custom token',
      editLabel: 'Edit label',
      viewInChainExplorer: 'View in chain explorer',
      showTokensWithBalancesFirst: 'Show tokens with balances first',
      send: 'Send',
      sendCrypto: 'Send crypto',
      showQrCode: 'Show QR code',
      yes: 'Yes',
      no: 'No',
      save: 'Save',
      delete: 'Delete',
      close: 'Close',
      login: 'Login',
      createNewWallet: 'Create new wallet',
      confirmAndSendTransaction: 'Confirm and send',
      connectToNode: 'Connect',
      disconnectFromNode: 'Disconnect',
      generateSignature: 'Generate signature',
      generateRawTransaction: 'Generate raw transaction',
      wallet: 'Wallet',
      pickAddress: 'Pick address',
      addressBook: 'Address book',
      dappBrowser: 'Browser',
      contracts: 'Contracts',
      iHaveWrittenDownMnemonic: 'I have written down the passphrase carefully',
      iHaveConfirmedMyMnemonic: 'I have successfully confirmed my passphrase',
      pressToRevealMnemonic: 'Press to reveal',
      browser: {
        forward: 'Forward',
        back: 'Back',
        reload: 'Reload',
        editPermissions: 'Edit permissions',
        newTab: 'New tab',
        closeTab: 'Close tab',
        showBookmarks: 'Show bookmarks',
        editBookmark: 'Edit bookmark',
        addBookmark: 'Add bookmark',
        bookmarks: 'Bookmarks',
        showDevTools: 'Show dev tools'
      }
    },
    title: {
      convertUnits: 'Convert units',
      setupPin: 'Setup pin',
      confirmPin: 'Confirm pin',
      enterPin: 'Enter pin',
      login: 'Login',
      createWallet: 'Create wallet',
      confirmWallet: 'Confirm wallet',
      contracts: 'Contracts',
      addressBook: 'Address book',
      editBookmark: 'Edit bookmark',
      addBookmark: 'Add bookmark',
      editAddressLabel: 'Edit address book entry',
      addAddressLabel: 'Add to address book',
      wallet: 'Wallet',
      addToken: 'Add token',
      editToken: 'Edit token',
      signData: 'Sign data',
      sendTransaction: 'Send transaction',
      transactions: 'Transactions',
      browser: 'Browser',
      bookmarks: 'Bookmarks',
      mobileMenu: {
        network: 'Network: {network}',
        alerts: 'Alerts ({numAlerts} new)',
        logout: 'Logout'
      }
    },
    setupPin: {
      intro1: 'Let\'s setup a 4-digit code for additional security.',
      intro2: 'Meth will prompt you for this code when sending transactions.',
      enterPin: 'Please enter your security code.',
      forgotMyPinCreateNewOne: 'I forgot my code! Setup a new one'
    },
    transactions: {
      noneYet: 'You haven\'t created any transactions in Meth yet'
    },
    addressBook: {
      filterPlaceholder: 'Filter...'
    },
    transaction: {
      type: {
        [TRANSACTION_TYPE.CONTRACT_CALL]: 'Contract call',
        [TRANSACTION_TYPE.CONTRACT_CREATION]: 'Contract creation',
        [TRANSACTION_TYPE.ETH_TRANSFER]: 'ETH transfer',
        [TRANSACTION_TYPE.TOKEN_TRANSFER]: 'Token transfer'
      },
      ethSent: '{amount} ETH',
      blockNum: 'Block: {blockNum}',
      contractLabel: 'Contract'
    },
    modal: {
      updateAvailable: {
        updateIsAvailable: 'A newer version of Meth ({version}) is now available. Please update now.'
      },
      connectNode: {
        connectToNode: 'Connect to node',
        pleaseChooseNode: 'Connect to Ethereum',
        network: '{network} network',
        type: 'Type',
        url: 'URL',
        urlInputPlaceholder: 'Custom URL ...'
      },
      confirmPin: {
        pleaseConfirmYourPin: 'Please confirm your code',
        pleaseEnterPinToConfirmTransaction: 'Please enter your security code to confirm the transaction',
        pleaseEnterPinToContinue: 'Please enter your security code to continue'
      },
      dappPermissions: {
        pleaseSet: 'Please decide which addresses this Dapp may access.',
        addressPermissions: 'Can access addresses',
        [ALL_ADDRESSES]: 'All my addresses'
      },
      addAccount: {
        cta: 'To generate an additional account from your passphrase press the button below.'
      },
      editAddress: {
        addressInputPlaceholder: '0x...',
        addressFieldLabel: 'Address',
        labelInputPlaceholder: 'Enter label...',
        labelFieldLabel: 'Label',
        areYouSureYouWantToDelete: 'Are you sure you want to remove this label?'
      },
      editBookmark: {
        labelInputPlaceholder: 'Enter label...',
        labelFieldLabel: 'Label',
        areYouSureYouWantToDelete: 'Are you sure you want to remove this bookmark?'
      },
      editToken: {
        nameFieldLabel: 'Description',
        nameInputPlaceholder: 'e.g. My token',
        symbolFieldLabel: 'Symbol',
        symbolInputPlaceholder: 'e.g. SNT',
        decimalsFieldLabel: 'Decimals',
        decimalsInputPlaceholder: 'e.g. 12',
        addressFieldLabel: 'Contract address',
        addressInputPlaceholder: '0x...',
        areYouSureYouWantToDelete: 'Are you sure you want to remove this custom token?'
      },
      signData: {
        field: {
          addressLabel: 'Address',
          dataLabel: 'Data',
          dataPlaceholder: '...'
        }
      },
      sendTransaction: {
        tab: {
          edit: 'Edit',
          confirm: 'Confirm',
          done: 'Done'
        },
        transactionSent: 'Transaction sent!',
        maxCost: 'Max cost',
        finalAmountLabel: 'Amount',
        rawTransactionLabel: 'Raw transaction',
        contractDeployment: 'Contract deployment',
        field: {
          isContractCreationLabel: 'Deploy a contract',
          fromLabel: 'From',
          fromPlaceholder: '0x...',
          toLabel: 'To',
          toPlaceholder: '0x...',
          dataLabel: 'Data',
          dataPlaceholder: '0x...',
          contractCodeLabel: 'Contract bytecode',
          contractCodePlaceholder: 'Paste code here...',
          amountLabel: 'Amount',
          amountWithAvailableLabel: 'Amount ({amount} available)',
          amountPlaceholder: 'Amount in {unit}',
          unitLabel: 'Unit',
          gasLimitLabel: 'Gas limit',
          gasLimitPlaceholder: 'e.g. 21000',
          gasPriceLabel: 'Gas price (gwei)',
          gasPricePlaceholder: 'e.g. 2'
        }
      },
      filterPicker: {
        filterPlaceholder: 'Filter...'
      },
      addressBookPicker: {
        title: 'Select address'
      }
    },
    contracts: {
      checkingContract: 'Checking contract',
      cannotCallMethodDueToParams: `Meth can currenly only execute methods which take parameters of the following types: {types}`,
      cannotRenderMethodOutputsDueToTypes: `Unable to render method call result due to unsupported types`,
      methodHasNoParams: 'Method has no parameters',
      results: 'Results',
      success: 'Success!',
      field: {
        addressLabel: 'Contract address',
        addressPlaceholder: '0x...',
        abiLabel: 'ABI',
        abiPlaceholder: '{ ...JSON string... }',
        methodLabel: 'Method'
      }
    },
    wallet: {
      pressButtonAboveToAddAccount: 'Press button above to generate a new account!',
      tokens: {
        noneConfigured: 'No tokens current configured',
        filterPlaceholder: 'Filter tokens...',
        checkBalance: 'Check balance'
      }
    },
    addressType: {
      [ADDRESS_TYPES.OWN_ACCOUNT]: 'Own account',
      [ADDRESS_TYPES.ACCOUNT]: 'Account',
      [ADDRESS_TYPES.CONTRACT]: 'Contract'
    },
    ethBalance: {
      unknown: 'Unknown'
    },
    count: {
      length: 'length: {num}'
    },
    config: {
      node: {
        rpc: 'Ethereum client node connected via RPC.',
        infura: 'Etherum client node hosted by Infura.io, connected to {network}.'
      }
    }
  }
}
