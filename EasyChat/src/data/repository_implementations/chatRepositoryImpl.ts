import { ChatModel } from "../../domain/models/chatModel";
import { ChatRepository } from "../../domain/repositories/chatRepository";

export class ChatRepositoryImpl implements ChatRepository {
    getAllChats(): Promise<ChatModel[]> {
        throw new Error("Method not implemented.");
    }

}