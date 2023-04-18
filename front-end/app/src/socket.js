import { io } from 'socket.io-client'

const URL = process.env.NODE_ENV === 'production' ? process.env.API_ADDRESS : 'http://10.0.0.43:4000';

export const socket = io(URL)