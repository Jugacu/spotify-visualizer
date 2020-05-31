import React, { useEffect, useState } from 'react'

import style from './Clock.module.scss'

const Clock = (): React.ReactElement => {

	const [ today, setToday ] = useState<Date>(new Date())

	useEffect((): () => void => {
		const interval = setInterval((): void => setToday(new Date()), 1000)
		return (): void => clearInterval(interval)
	})

	return (
		<div className={ style.container }>
			<div className={ style.big }>
				{
					today.getHours() < 10 ? '0' + today.getHours() : today.getHours()
				}
				:
				{
					today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes()
				}
			</div>
			<div className={ style.small }>
				<div>
					{
						today.getDate()
					}
				</div>
				<div>
					{
						today.toLocaleString('default', { month: 'long' })
					}
				</div>
				<div>
					{
						today.getFullYear()
					}
				</div>
			</div>
		</div>
	)
}

export default Clock