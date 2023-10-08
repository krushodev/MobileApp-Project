import { io } from 'socket.io-client';

const socket = io(process.env.EXPO_PUBLIC_BASE_URL_SOCKET ?? 'http://192.168.0.118:8080');

export default socket;
