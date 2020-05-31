import React from 'react'
import { useSelector } from 'react-redux'

import style from './UserCard.module.scss'

import { DefaultState } from '../../../redux/reducers'
import { Me } from '../../../redux/types/MeTypes'

export const UserCard = (): React.ReactElement => {

	const me = useSelector<DefaultState, Me | undefined>((state): Me | undefined => state.me.me)

	return (
		<div className={ style.container }>
			<img className={ style.image } src={ me?.images[0].url } alt={ me?.display_name }/>
			<div className={ style.data }>
				<h2 className={ style.data__name }>
					{ me?.display_name }
				</h2>
				<h2 className={ style.data__followers }>
					{ me?.followers.total } followers
				</h2>
			</div>
		</div>
	)
}