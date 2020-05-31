import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, Store } from 'redux'
import { PersistPartial } from 'redux-persist/lib/persistReducer'

import { persistStore } from 'redux-persist'
import { Persistor } from 'redux-persist/es/types'

import { persistReducer } from './persistReducer'
import { RootState } from '../rootReducer'
import { ActionTypes } from '../actions'

type AppStore = {
	store: Store,
	persistor: Persistor
}

export const createPersistedStore = (): AppStore => {
	const store = createStore<RootState & PersistPartial, ActionTypes, null, null>(persistReducer, composeWithDevTools())

	const persistor = persistStore(store)

	return { store, persistor }
}