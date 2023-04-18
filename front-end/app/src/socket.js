import { io } from 'socket.io-client'

const URL = process.env.NODE_ENV === 'production' ? `http://35.164.11.228:3000` : 'http://10.0.0.43:3000';

export const socket = io(URL)