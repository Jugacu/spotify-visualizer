import { ActionTypeNames, DefaultAction } from './index'
import { Track } from '../types/TrackTypes'

export interface SetTrack extends DefaultAction {
	type: typeof ActionTypeNames.SET_TRACK,
	track: Track
}