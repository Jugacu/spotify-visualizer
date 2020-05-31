import { ActionTypeNames, DefaultAction } from './index'
import { Me } from '../types/MeTypes'

export interface FetchMeSuccess extends DefaultAction {
	type: typeof ActionTypeNames.FETCH_ME_SUCCESS,
	me: Me
}

export interface FetchMeFailed extends DefaultAction {
	type: typeof ActionTypeNames.FETCH_ME_FAILED
}