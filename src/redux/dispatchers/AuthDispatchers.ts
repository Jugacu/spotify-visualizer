import axios from 'axios'

import {
	FetchAuthFailed,
	FetchAuthSuccess,
	FetchRefreshAuthFailed,
	FetchRefreshAuthSuccess
} from '../actions/AuthActions'

import { ActionTypeNames } from '../actions'
import { Auth } from '../types/AuthTypes'

export const FetchAuth = async (authorizationCode: string): Promise<FetchAuthSuccess | FetchAuthFailed> => {
	try {
		const response = (await axios.post<Auth>(
			process.env.REACT_APP_SECRET_URL || '',
			{
				code: authorizationCode,
				redirect_uri: process.env.REACT_APP_REDIRECT_URI || '',
				grant_type: 'authorization_code'
			}
		))

		window.history.replaceState({ }, document.title, '/')

		return {
			type: ActionTypeNames.FETCH_AUTH_SUCCESS,
			auth: {
				...response.data,
				granted_at: Date.now()
			}
		}
	} catch (e) {
		return {
			type: ActionTypeNames.FETCH_AUTH_FAILED
		}
	}
}

export const RefreshAuth = async (refreshToken: string): Promise<FetchRefreshAuthSuccess | FetchRefreshAuthFailed> => {
	try {
		const response = (await axios.post<Auth>(
			process.env.REACT_APP_REFRESH_URL || '',
			{
				refresh_token: refreshToken
			}
		))

		return {
			type: ActionTypeNames.FETCH_REFRESH_AUTH_SUCCESS,
			auth: {
				...response.data,
				granted_at: Date.now()
			}
		}
	} catch (e) {
		return {
			type: ActionTypeNames.FETCH_REFRESH_AUTH_FAILED
		}
	}
}