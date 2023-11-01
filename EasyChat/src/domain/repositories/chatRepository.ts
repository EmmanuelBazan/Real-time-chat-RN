import { ChatModel } from "../models/chatModel";

export interface ChatRepository {
    getAllChats(): ChatModel[];
}