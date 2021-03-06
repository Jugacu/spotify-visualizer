export class DefaultState {
	public auth?: Auth
}

export interface Auth {
	access_token: string
	expires_in: number
	refresh_token: string,
	scope: string,
	token_type: string
	granted_at: number
}