import { DefaultState as AuthDefaultState } from '../types/AuthTypes'
import { DefaultState as TrackDefaultState } from '../types/TrackTypes'
import { DefaultState as MeDefaultState } from '../types/MeTypes'

export interface DefaultState {
	auth: AuthDefaultState,
	track: TrackDefaultState,
	me: MeDefaultState
}