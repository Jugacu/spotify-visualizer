import axios, { AxiosInstance } from 'axios'

export const spotifyApiInstance = (token: string): AxiosInstance => {
	return axios.create({
		baseURL: process.env.REACT_APP_API_BASE_URL,
		withCredentials: false,
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
}