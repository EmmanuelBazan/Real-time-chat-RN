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

export class WSService {

    _socket?: SocketType

    getSocket = async (): Promise<SocketType> => {
        if(this._socket != undefined) return this._socket;

        this._socket = io(SOCKET_URL, {
            transports:['websocket']
        })

        this.initializeSocket(this._socket);

        return this._socket;
    }

    private initializeSocket = async(socket: SocketType) => {

        try {
            console.log('⚠️⚠️ Initializing socket ⚠️⚠️');

            socket.on("connect", () => {
                console.log('✅✅✅ socket connected: ',socket.id);

                socket.emit('getAllGroups');
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