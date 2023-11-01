import { NamedExoticComponent } from "react";
import { Socket } from "socket.io-client";
import { ChatModel } from "../models/chatModel";

interface ServerToClientEvents {
    chatList: (groups:ChatModel[]) => void;
}

interface ClientToServerEvents {
    getAllGroups: () => void;
    createChat: (chatName:string) => void; 
}

export type SocketType = Socket<ServerToClientEvents, ClientToServerEvents>;