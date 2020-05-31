import { DefaultState } from '../types/MeTypes'
import { ActionTypeNames, ActionTypes } from '../actions'

export const Reduce = (state = new DefaultState(), action: ActionTypes): DefaultState => {
	switch (action.type) {
		case ActionTypeNames.FETCH_ME_SUCCESS:
			return {
				me: action.me
			}
		case ActionTypeNames.FETCH_ME_FAILED:
			return {
				me: undefined
			}
	}

	return state
}