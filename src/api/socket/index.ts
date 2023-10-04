import { io } from 'socket.io-client';

const socket = io('http://192.168.0.118:8080');

export default socket;
