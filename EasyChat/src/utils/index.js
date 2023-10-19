import { Platform } from "react-native";
import { io } from "socket.io-client";

// export const baseUrl = Platform.OS === "android" ? "http://10.0.2.2:3000/" : "http://localhost:3000";

// export const socket = io("http://localhost:4000");

const SOCKET_URL = 'http://localhost:4000';

class WSService {
    initializeSocket = async() => {
        try {
            this.socket = io(SOCKET_URL, {
                transports:['websocket']
            })
            console.log('Initializing socket',this.socket);

            this.socket.on('connect', (data) => {
                console.log('=== socket connected ===');
            })

            this.socket.on('disconnect', (data) => {
                console.log('=== socket disconnected ===');
            })

            this.socket.on('error', (data) => {
                console.log('=== socket error ===',data);
            })

        } catch (error) {
            console.log('socket is not initialized',error);
        }
    }
}