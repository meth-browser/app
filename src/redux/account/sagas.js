import { put, takeLatest } from 'redux-saga/effects'

import {
  LOAD_WALLET,
  SEND_RAW_TX,
  TX_COMPLETED,
  SAVE_DAPP_PERMISSIONS,
  SAVE_ADDRESS_BOOK_ENTRY,
  DELETE_ADDRESS_BOOK_ENTRY,
  ADD_CUSTOM_TOKEN,
  UPDATE_CUSTOM_TOKEN,
  REMOVE_CUSTOM_TOKEN
} from './actions'
import { createAction } from '../utils'
import { getStore } from '../'


function* onLoadWallet ({ storage }, { payload: mnemonic }) {
  yield storage.setMnemonic(mnemonic)
}

function* onSuccessfulTransaction (_, { payload: receipt }) {
  const { selectors: { getTxDeferred } } = getStore()

  // resolve the tx promise so that the original caller gets a tx receipt
  const deferred = getTxDeferred()
  if (deferred) {
    deferred.resolve(receipt)
  }

  yield put(createAction(TX_COMPLETED))
}

function* onUpdateDappPermissions ({ storage }) {
  const { selectors: { getDappPermissions } } = getStore()

  yield storage.saveDappPermissions(getDappPermissions())
}

function* onUpdateAddressBook ({ storage }) {
  const { selectors: { getAddressBook } } = getStore()

  yield storage.saveAddressBook(getAddressBook())
}

function* onUpdateCustomTokens ({ storage }) {
  const { selectors: { getCustomTokens } } = getStore()

  yield storage.saveCustomTokens(getCustomTokens())
}

export default app => function* saga () {
  yield takeLatest(LOAD_WALLET, onLoadWallet, app)
  yield takeLatest(SEND_RAW_TX, onSuccessfulTransaction, app)
  yield takeLatest(SAVE_DAPP_PERMISSIONS, onUpdateDappPermissions, app)
  yield takeLatest(SAVE_ADDRESS_BOOK_ENTRY, onUpdateAddressBook, app)
  yield takeLatest(DELETE_ADDRESS_BOOK_ENTRY, onUpdateAddressBook, app)
  yield takeLatest(ADD_CUSTOM_TOKEN, onUpdateCustomTokens, app)
  yield takeLatest(UPDATE_CUSTOM_TOKEN, onUpdateCustomTokens, app)
  yield takeLatest(REMOVE_CUSTOM_TOKEN, onUpdateCustomTokens, app)
}

export const _privateFunctions = {
  onLoadWallet,
  onSuccessfulTransaction,
  onUpdateDappPermissions,
  onUpdateAddressBook
}
