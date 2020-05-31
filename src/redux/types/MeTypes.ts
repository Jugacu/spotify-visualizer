import { Track } from './TrackTypes'

export class DefaultState {
	public me?: Me
}

/* tslint:disable:no-any */
export interface ExplicitContent {
	filter_enabled: boolean
	filter_locked: boolean
}

export interface ExternalUrls {
	spotify: string
}

export interface Followers {
	href?: any
	total: number
}

export interface Image {
	height?: any
	url: string
	width?: any
}

export interface Me {
	country: string
	display_name: string
	email: string
	explicit_content: ExplicitContent
	external_urls: ExternalUrls
	followers: Followers
	href: string
	id: string
	images: Image[]
	product: string
	type: string
	uri: string
}

