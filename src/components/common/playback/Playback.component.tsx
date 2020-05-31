import React from 'react'
import { useSelector } from 'react-redux'

import style from './Playback.module.scss'

import { DefaultState } from '../../../redux/reducers'
import { Track } from '../../../redux/types/TrackTypes'

export const PlayBack = (): React.ReactElement => {

	const track = useSelector<DefaultState, Track | undefined>((u): Track | undefined => u.track.track)

	return (
		<>
			{
				track &&
				<div className={ style.container }>
					<div className={ style.album }>
						<div className={ style.album__data }>
							<h2 className={ style.album__name }>
								{
									track?.item.album.name
								}
							</h2>
							<h2 className={ style.album__song }>
								{
									track?.item.name
								}
							</h2>
						</div>
					</div>
					<div className={ style.author }>
						{
							track?.item.artists[0].name
						}
					</div>
				</div>
			}
		</>
	)
}