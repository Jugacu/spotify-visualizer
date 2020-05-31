import { Track } from '../types/TrackTypes'
import { SetTrack as SetTrackAction } from '../actions/TrackActions'

import { ActionTypeNames } from '../actions'

export const SetTrack = (track: Track): SetTrackAction => {
	return {
		type: ActionTypeNames.SET_TRACK,
		track
	}
}