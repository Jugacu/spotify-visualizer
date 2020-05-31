import { AnyAction } from 'redux'
import { FetchAuthFailed, FetchAuthSuccess, FetchRefreshAuthFailed, FetchRefreshAuthSuccess } from './AuthActions'
import { SetTrack } from './TrackActions'
import { FetchMeFailed, FetchMeSuccess } from './MeActions'

export enum ActionTypeNames {
	SET_TRACK = '@@SET_TRACK',

	FETCH_AUTH_SUCCESS = '@@FETCH_AUTH_SUCCESS',
	FETCH_AUTH_FAILED = '@@FETCH_AUTH_FAILED',

	FETCH_REFRESH_AUTH_SUCCESS = '@@FETCH_REFRESH_AUTH_SUCCESS',
	FETCH_REFRESH_AUTH_FAILED = '@@FETCH_REFRESH_AUTH_FAILED',

	FETCH_ME_SUCCESS = '@@FETCH_ME_SUCCESS',
	FETCH_ME_FAILED = '@@FETCH_ME_FAILED'
}

export interface DefaultAction extends AnyAction {
	type: ActionTypeNames
}

export type ActionTypes =
	| FetchAuthSuccess
	| FetchAuthFailed

	| FetchRefreshAuthSuccess
	| FetchRefreshAuthFailed

	| SetTrack

	| FetchMeSuccess
	| FetchMeFailed

