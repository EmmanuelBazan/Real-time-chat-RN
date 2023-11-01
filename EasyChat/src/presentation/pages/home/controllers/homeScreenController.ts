import { useEffect, useState } from "react";
import { ChatModel } from "../../../../domain/models/chatModel";
import { SocketType } from "../../../../domain/types/socketType";
import { getAllChatsUseCase } from "../../../../domain/useCases/chat/getAllChats";
import { SocketService } from "../../../../socket/socketController";

const {
    getSocket
} = new SocketService();

export default function HomeScreenController() {
    const socket:SocketType = getSocket();

    const [modalVisible, setModalVisible] = useState(false);

    // useEffect(() => {
    //     socketService.initializeSocket();

    //     socketService.emit('getAllGroups');
        
    //     socketService.on('groupList', (groups: any) => {
    //         console.log(groups);
    //     })
    // },[socketService]);

    useEffect(() => {
        socket.emit('getAllGroups');
        socket.on('chatList',allChats);
    },[socket])

    function allChats(chats:ChatModel[]) {
        console.log('✅✅✅ Screen: ',chats);
    }

    const sendGroup = () => {
        socket.emit('createChat','nombre del chat');
    }

    return {
        modalVisible,
        setModalVisible,
        sendGroup,
    }
}