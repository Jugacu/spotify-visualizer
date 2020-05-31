import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import style from './App.module.scss'

import Index from './pages/Index/Index.component'
import Visualizer from './pages/Visualizer/Visualizer.component'

import { DefaultState } from '../redux/reducers'
import { FetchAuth, RefreshAuth } from '../redux/dispatchers/AuthDispatchers'
import { Auth } from '../redux/types/AuthTypes'

import { getCurrentTrack, getHashParams } from '../utils/SpotifyUtils'

import { Track } from '../redux/types/TrackTypes'
import { SetTrack } from '../redux/dispatchers/TrackDispatcher'
import { FetchMe } from '../redux/dispatchers/MeDispachers'

const App = (): React.ReactElement => {

	const dispatch = useDispatch()

	const auth = useSelector<DefaultState, Auth | undefined>((u): Auth | undefined => u.auth.auth)
	const params = getHashParams()

	let currentTrack: Track | undefined
	let refreshingToken = false

	useEffect((): () => void => {
		if (params.code) {
			(async (): Promise<void> => {
				dispatch(await FetchAuth(params.code))
			})()
		}

		let interval: NodeJS.Timeout
		(async (): Promise<void> => {
			if (auth) {
				interval = startLoop()
				dispatch(await FetchMe(auth.access_token))
			}
		})()

		return (): void => clearInterval(interval)
	})

	const startLoop = (): NodeJS.Timeout => {
		return setInterval(syncLoop, 1000)
	}

	const syncLoop = async (): Promise<void> => {
		const token = auth?.access_token
		const refreshToken = auth?.refresh_token

		if (!token)
			return

		try {
			const track = await getCurrentTrack(token)
			if (track && track.item.id !== currentTrack?.item.id) {
				currentTrack = track
				dispatch(SetTrack(track))
			}
		} catch (e) {
			if (e.response.status === 401 && !refreshingToken && refreshToken) {
				refreshingToken = true
				dispatch(await RefreshAuth(refreshToken))
				refreshingToken = false
			}
		}
	}

	return (
		<div className={ style.App }>
			{
				auth ? <Visualizer/> : <Index/>
			}
		</div>
	)
}

export default App
