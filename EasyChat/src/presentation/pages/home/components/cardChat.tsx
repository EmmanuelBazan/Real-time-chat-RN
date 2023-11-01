import React from "react"
import { Card } from "react-native-paper"
import { Text } from "react-native"
import { ChatModel } from "../../../../domain/models/chatModel"

type props = {
    chat: ChatModel
}

const CardChat = ({chat}:props) => {
    return(
        <Card style={{marginHorizontal: 20, marginVertical: 5, backgroundColor: 'white'}} >
            <Card.Title title={chat.name} />
            <Card.Content>
                <Text></Text>
            </Card.Content>
        </Card>
    )
}

export default CardChat;