import * as queryString from 'querystring'
import { randomString } from './MiscUtils'
import { Track } from '../redux/types/TrackTypes'
import { spotifyApiInstance } from './ApiUtils'

export const requestToken = (): void => {
	window.open('https://accounts.spotify.com/authorize?' +
		queryString.stringify({
			response_type: 'code',
			client_id: process.env.REACT_APP_CLIENT_ID,
			scope: [
				'user-read-currently-playing',
				'user-read-private',
				'user-read-email'
			],
			redirect_uri: process.env.REACT_APP_REDIRECT_URI,
			state: randomString(16)
		}), '_self')
}

export const getHashParams = (): { code: string, state: string } => { /* eslint-disable */
	// helper function to parse the query string that spotify sends back when you log in
	// tslint:disable-next-line:no-any
	const hashParams: any = { }
	// tslint:disable-next-line:one-variable-per-declaration prefer-const
	let e, r = /([^&;=]+)=?([^&;]*)/g,
		// tslint:disable-next-line:prefer-const
		q = window.location.search.substring(1)
	// tslint:disable-next-line:no-conditional-assignment
	while (e = r.exec(q)) {
		hashParams[e[1]] = decodeURIComponent(e[2])
	}
	return hashParams
}

export const getCurrentTrack = async (token: string): Promise<Track | undefined> => {
	return (await spotifyApiInstance(token).get<Track | undefined>('/me/player/currently-playing')).data
}