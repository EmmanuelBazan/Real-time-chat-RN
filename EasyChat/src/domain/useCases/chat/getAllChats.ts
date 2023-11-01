import { ChatRepositoryImpl } from "../../../data/repository_implementations/chatRepositoryImpl";
import { ChatModel } from "../../models/chatModel";

const {getAllChats} = new ChatRepositoryImpl();

export const getAllChatsUseCase = (): ChatModel[] => {
    return getAllChats();
}