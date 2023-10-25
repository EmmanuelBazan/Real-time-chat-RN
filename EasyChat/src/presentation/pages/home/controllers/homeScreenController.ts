import { useEffect, useState } from "react";

export default function HomeScreenController() {
    const [modalVisible, setModalVisible] = useState(false);

    // useEffect(() => {
    //     socketService.initializeSocket();

    //     socketService.emit('getAllGroups');
        
    //     socketService.on('groupList', (groups: any) => {
    //         console.log(groups);
    //     })
    // },[socketService]);

    const sendGroup = () => {
        // socketService.emit('create_group','nombre del grupo');
    }

    return {
        modalVisible,
        setModalVisible,
        sendGroup,
    }
}