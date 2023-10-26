import { io, Socket } from "socket.io-client";

const SOCKET_URL = 'https://1d89-2806-2f0-7421-fc90-c8b2-3c42-7573-c70f.ngrok-free.app';

interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
    getAllGroups: () => void;
}

type SocketType = Socket<ServerToClientEvents, ClientToServerEvents>;

class WSService {
    initializeSocket = async() => {
        try {
            const socket: SocketType = io(SOCKET_URL, {
                transports:['websocket']
            })

            console.log('=== Initializing socket ===');

            socket.on("connect", () => {
                console.log('=== socket connected ',socket.id,'===');

                socket.emit('getAllGroups');
            })

            socket.on('disconnect', (data) => {
                console.log('=== socket disconnected ===');
            })

            socket.on("connect_error", (data) => {
                console.log('=== socket error ===',data);
            })

        } catch (error) {
            console.log('socket is not initialized',error);
        }
    }

    emit(event: any, data = {}, socket: SocketType) {
        socket.emit(event)
    }

    on(event: any, listener: any, socket: SocketType) {
        socket.on(event, listener)
    }

    removeListener(listenerName: any, socket: SocketType) {
        socket.removeListener(listenerName)
    }
}

const socketService = new WSService();

export default socketService;