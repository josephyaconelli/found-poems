import { io } from 'socket.io-client'

const URL = process.env.NODE_ENV === 'production' ? `${process.env.API_ADDRESS}:3000` : 'http://10.0.0.43:3000';

export const socket = io(URL)