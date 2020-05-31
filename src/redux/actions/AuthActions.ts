import { ActionTypeNames, DefaultAction } from './index'
import { Auth } from '../types/AuthTypes'

export interface FetchAuthSuccess extends DefaultAction {
	type: typeof ActionTypeNames.FETCH_AUTH_SUCCESS,
	auth: Auth
}

export interface FetchAuthFailed extends DefaultAction {
	type: typeof ActionTypeNames.FETCH_AUTH_FAILED
}

export interface FetchRefreshAuthSuccess extends DefaultAction {
	type: typeof ActionTypeNames.FETCH_REFRESH_AUTH_SUCCESS
	auth: Auth
}

export interface FetchRefreshAuthFailed extends DefaultAction {
	type: typeof ActionTypeNames.FETCH_REFRESH_AUTH_FAILED
}