import React from "react";
import { Alert, FlatList, Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import {Card} from 'react-native-paper'
import Spacer from "../../../widgets/spacer/spacer";
import styles from "../styles/homeScreen_styles";
import useController from '../controllers/homeScreenController';
import AddChatModal from "../components/addChatModal";
import CardChat from "../components/cardChat";

const HomeScreen = () => {

    const {
        modalVisible,
        setModalVisible,
        sendGroup,
        chats,
        handleOnchangeInput,
        inputs,
        isChatName,
        validateInputs
    } = useController();
    
    return(
        <View style={styles.globalContainer} >
            
            <Spacer hspace={30}/>

            <View style={styles.appBar} >
                <Text style={styles.h1} >Bienvenido Emmanuel</Text>
            </View>

            <View style={styles.body} >
            <FlatList
                style={{marginBottom: 40}}
                data={chats}
                renderItem={({item}) => <CardChat chat={item} /> }
                keyExtractor={(item,index) => index.toString()}
            />
                <View style={styles.btncontainer} >
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <View style={styles.btn} >
                            <Text style={styles.txtbtnW} >+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

            <AddChatModal 
                modalVisible={modalVisible} 
                sendGroup={sendGroup} 
                setModalVisible={setModalVisible}
                chatNameValue={inputs.chatName}
                isChatName={isChatName}
                onChangeInput={handleOnchangeInput}
                validateForm={validateInputs}
            />

        </View>
    )
}

export default HomeScreen;