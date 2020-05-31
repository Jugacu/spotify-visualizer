import React from 'react'

import Particles from '../../common/particles/Particles.component'

import style from './Index.module.scss'

import logo from './logo.png'
import { requestToken } from '../../../utils/SpotifyUtils'

const Index = (): React.ReactElement => {

	const handleClick = (): void => requestToken()

	return (
		<div className={ style.wrapper }>
			<Particles className={ style.particles }/>
			<div className={ style.connect }>
				<div className={ style.connect__content }>
					<img src={ logo } className={ style.connect__logo } alt='Spotify logo'/>
					<p className={ style.connect__text }>
						To use this app you need to authorize it in Spotify.
					</p>
					<button onClick={ handleClick } className={ style.connect__btn }>
						Connect
					</button>
				</div>
			</div>
		</div>
	)
}

export default Index