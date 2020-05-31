import { createPersistedStore } from './persist/createPersistedStore'

const { store, persistor } = createPersistedStore()

export { store, persistor }