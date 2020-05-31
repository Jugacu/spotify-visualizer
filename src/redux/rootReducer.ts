import { combineReducers } from 'redux'
import { Reduce as AuthReducer } from './reducers/AuthReducer'
import { Reduce as TrackReducer } from './reducers/TrackReducer'
import { Reduce as MeReducer } from './reducers/MeReducer'

export const rootReducer = combineReducers({
	auth: AuthReducer,
	track: TrackReducer,
	me: MeReducer
})

export type RootState = ReturnType<typeof rootReducer>