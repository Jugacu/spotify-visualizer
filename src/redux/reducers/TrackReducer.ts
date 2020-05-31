import { DefaultState } from '../types/TrackTypes'
import { ActionTypeNames, ActionTypes } from '../actions'

export const Reduce = (state = new DefaultState(), action: ActionTypes): DefaultState => {

	switch (action.type) {
		case ActionTypeNames.SET_TRACK:
			return {
				...state,
				track: action.track
			}
	}

	return state
}