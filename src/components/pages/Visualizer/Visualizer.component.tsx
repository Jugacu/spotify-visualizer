import React from 'react'

import style from './Visualizer.module.scss'

import Background from '../../common/background/Background.component'
import Clock from '../../common/clock/Clock.component'
import Particles from '../../common/particles/Particles.component'
import { PlayBack } from '../../common/playback/Playback.component'
import { UserCard } from '../../common/usercard/UserCard.component'

const Visualizer = (): React.ReactElement => {

	return (
		<div>
			<Background/>
			<Particles className={ style.particles }/>
			<Clock/>
			<PlayBack/>
			<UserCard/>
		</div>
	)
}

export default Visualizer