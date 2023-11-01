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
    const [chats,setChats] = useState<ChatModel[]>([]);
    const [isChatName,setIsChatName] = useState(false);

    const [inputs,setInputs] = useState({
        chatName: ''
    });

    useEffect(() => {
        socket.emit('getAllGroups');
        socket.on('chatList',allChats);
    },[socket])

    function handleOnchangeInput(value:string, inputName:string) {
        setInputs(prevState => ({...prevState, [inputName]:value}));
        switch (inputName) {
            case 'chatName':
                setIsChatName(true);
                break;
        
            default:
                break;
        }
    }

    function validateInputs():boolean{
        let chatNameOk:boolean = inputs.chatName.length > 0;

        setIsChatName(chatNameOk);

        return chatNameOk;
    }

    function allChats(chats:ChatModel[]):void{
        setChats(chats);
    }

    const sendGroup = () => {
        socket.emit('createChat',inputs.chatName);
        setInputs(prevState => ({...prevState, chatName:''}));
    }

    return {
        modalVisible,
        setModalVisible,
        sendGroup,
        chats,
        handleOnchangeInput,
        inputs,
        isChatName,
        validateInputs
    }
}