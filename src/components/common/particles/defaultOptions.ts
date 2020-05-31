import { InteractivityDetect } from 'tsparticles/dist/Enums/InteractivityDetect'
import { OutMode } from 'tsparticles/dist/Enums/OutMode'
import { MoveDirection } from 'tsparticles/dist/Enums/MoveDirection'
import { RecursivePartial } from 'tsparticles/dist/Types/RecursivePartial'
import { IOptions } from 'tsparticles/dist/Options/Interfaces/IOptions'

export const defaultParams: RecursivePartial<IOptions> = {
	'particles': {
		'number': {
			'value': 40,
			'density': {
				'enable': true,
				'value_area': 800
			}
		},
		'color': {
			'value': ['#FFF']
		},
		'shape': {
			'type': 'circle',
			'stroke': {
				'width': 0,
				'color': '#8a8a8a'
			}
		},
		'opacity': {
			'value': 0.5211089197812949,
			'random': false,
			'anim': {
				'enable': true,
				'speed': 1,
				'opacity_min': 0.1,
				'sync': false
			}
		},
		'size': {
			'value': 5,
			'random': true,
			'anim': {
				'enable': true,
				'speed': 12.181158184520175,
				'size_min': 0.1,
				'sync': true
			}
		},
		'line_linked': {
			'enable': false,
			'distance': 150,
			'color': '#c8c8c8',
			'opacity': 0.4,
			'width': 1
		},
		'move': {
			'enable': true,
			'speed': 8,
			'direction': MoveDirection.none,
			'random': true,
			'straight': false,
			'out_mode': OutMode.bounce,
			'bounce': false,
			'attract': {
				'enable': true,
				'rotateX': 600,
				'rotateY': 1200
			}
		}
	},
	'interactivity': {
		'detect_on': InteractivityDetect.canvas,
		'events': {
			'onhover': {
				'enable': true,
				'mode': 'bubble'
			},
			'onclick': {
				'enable': false,
				'mode': 'push'
			},
			'resize': true
		},
		'modes': {
			'grab': {
				'distance': 400,
				'line_linked': {
					'opacity': 1
				}
			},
			'bubble': {
				'distance': 200,
				'size': 6,
				'duration': 2,
				'opacity': 1,
			},
			'repulse': {
				'distance': 200,
				'duration': 0.4
			},
			'push': {
				'particles_nb': 4
			},
			'remove': {
				'particles_nb': 2
			}
		}
	},
	'retina_detect': true
}