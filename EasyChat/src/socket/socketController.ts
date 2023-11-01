import { io } from "socket.io-client";
import { SocketType } from "../domain/types/socketType";

const SOCKET_URL = 'https://72c4-2806-2f0-7421-fc90-f174-419b-c7e3-e880.ngrok-free.app';

export class SocketService {

    _socket?: SocketType

    getSocket = (): SocketType => {
        if(this._socket != undefined) return this._socket;

        this._socket = io(SOCKET_URL, {
            transports:['websocket']
        })

        this.initializeSocket(this._socket);

        return this._socket;
    }

    private initializeSocket = (socket: SocketType) => {

        try {
            console.log('⚠️⚠️ Initializing socket ⚠️⚠️');

            socket.on("connect", () => {
                console.log('✅✅✅ socket connected: ',socket.id);
            })

            socket.on('disconnect', (data) => {
                console.log('⚠️⚠️⚠️ socket disconnected');
            })

            socket.on("connect_error", (data) => {
                console.log('❌❌❌ socket error: ',data);
            })

        } catch (error) {
            console.log('socket is not initialized',error);
        }

    }

    async socketEmit(socket: SocketType, event: any) {
        socket.emit(event)
    }

    async socketOn(socket: SocketType, event: any, listener: any) {
        socket.on(event, listener)
    }

    async removeListener(socket: SocketType, listenerName: any) {
        socket.removeListener(listenerName)
    }
}