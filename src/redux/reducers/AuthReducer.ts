import { DefaultState } from '../types/AuthTypes'
import { ActionTypeNames, ActionTypes } from '../actions'

export const Reduce = (state = new DefaultState(), action: ActionTypes): DefaultState => {

	switch (action.type) {
		case ActionTypeNames.FETCH_AUTH_SUCCESS:
		case ActionTypeNames.FETCH_REFRESH_AUTH_SUCCESS:
			return {
				auth: {
					...state.auth,
					...action.auth
				}
			}
		case ActionTypeNames.FETCH_AUTH_FAILED:
		case ActionTypeNames.FETCH_REFRESH_AUTH_FAILED:
			return {
				...state,
				auth: undefined
			}
	}

	return state
}