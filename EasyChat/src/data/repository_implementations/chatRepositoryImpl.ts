import { ChatModel } from "../../domain/models/chatModel";
import { ChatRepository } from "../../domain/repositories/chatRepository";
import { SocketType } from "../../domain/types/socketType";
import { SocketService } from "../services/remote/socketService";

const {
    socketEmit,
    socketOn,
    getSocket
} = new SocketService();

export class ChatRepositoryImpl implements ChatRepository {

    getAllChats(): ChatModel[] {
        try {
            const socket: SocketType = getSocket();

            let chatList:ChatModel[] = [];

            socket.emit('getAllGroups');

            socket.on('chatList',(groups:ChatModel[]) => {
                return groups;
            })

            return chatList;
        } catch (error) {
            console.error('❌❌❌ Error getAllChats: ',error);
            return [];
        }
    }

}