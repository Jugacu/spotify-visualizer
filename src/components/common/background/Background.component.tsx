import React  from 'react'

import style from './Background.module.scss'
import { useSelector } from 'react-redux'
import { DefaultState } from '../../../redux/reducers'
import { Track } from '../../../redux/types/TrackTypes'

const Background = (): React.ReactElement => {

	const track =  useSelector<DefaultState, Track | undefined>((u): Track | undefined => u.track.track)

	return (
		<div className={ style.container }>
			<div className={ style.smoother }/>
			<div className={ style.image } style={ { backgroundImage: `url(${track?.item.album.images[0].url})` } }/>
		</div>
	)
}

export default Background