import { FetchMeFailed, FetchMeSuccess } from '../actions/MeActions'
import { ActionTypeNames } from '../actions'
import { Me } from '../types/MeTypes'
import { spotifyApiInstance } from '../../utils/ApiUtils'

export const FetchMe = async (token: string): Promise<FetchMeSuccess | FetchMeFailed> => {
	try {
		const response = (await spotifyApiInstance(token).get<Me>('/me'))

		return {
			type: ActionTypeNames.FETCH_ME_SUCCESS,
			me: response.data
		}
	} catch (e) {
		return {
			type: ActionTypeNames.FETCH_ME_FAILED
		}
	}
}