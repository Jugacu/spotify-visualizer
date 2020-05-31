import React, { FunctionComponent, useEffect, useState } from 'react'
import { RecursivePartial } from 'tsparticles/dist/Types/RecursivePartial'
import { IOptions } from 'tsparticles/dist/Interfaces/Options/IOptions'
import { Container } from 'tsparticles/dist/Classes/Container'
import { Options } from 'tsparticles/dist/Classes/Options/Options'
import { tsParticles } from 'tsparticles'

import { defaultParams } from './defaultOptions'

export interface ParticlesProps {
	id?: string
	width?: string
	height?: string
	params?: RecursivePartial<IOptions>
	// tslint:disable-next-line:no-any
	style?: any
	className?: string
	canvasClassName?: string
	particlesRef?: React.RefObject<Container>
}

const Particles: FunctionComponent<ParticlesProps> = (props): React.ReactElement => {
	const [ canvas, setCanvas ] = useState<HTMLCanvasElement | undefined>(undefined)
	const [ library, setLibrary ] = useState<Container | undefined>(undefined)

	const destroy = (): void => {
		if (library) {
			library.destroy()
			setLibrary(undefined)
		}
	}

	const loadCanvas = (canvasRef: HTMLCanvasElement): void => {
		if (canvasRef) {
			setCanvas(canvas)
			if (library) {
				library.canvas.loadCanvas(canvasRef)
				library.start()
			}
		}
	}

	const buildLibrary = (tagId: string, params?: RecursivePartial<IOptions>): Container => {
		const options = new Options()

		options.load(defaultParams)
		options.load(params)

		tsParticles.init()

		const container = new Container(tagId, options)

		if (props.particlesRef) {
			(props.particlesRef as React.MutableRefObject<Container>).current = container
		}

		return container
	}

	useEffect((): () => void => {
		setLibrary(buildLibrary(props.id ?? 'particles', props.params))
		return (): void => destroy()
		// eslint-disable-next-line
	}, [ props ])

	const { width, height, className, canvasClassName, id, style } = props
	return (
		<div
			className={ className }
			id={ id }>
			<canvas
				ref={ loadCanvas }
				className={ canvasClassName }
				style={ {
					...style,
					width,
					height
				} }
			/>
		</div>
	)
}

Particles.defaultProps = {
	id: 'particles',
	width: '100%',
	height: '100%',
	style: { },
	params: defaultParams,
}

export default Particles