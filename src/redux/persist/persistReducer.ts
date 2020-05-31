import { persistReducer as createPersistedReducer } from 'redux-persist'
import { persistConfig } from './persistConfig'
import { rootReducer } from '../rootReducer'

export const persistReducer = createPersistedReducer(persistConfig, rootReducer)