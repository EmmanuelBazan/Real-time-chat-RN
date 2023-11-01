import React from "react";
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import Spacer from "../../../widgets/spacer/spacer";
import styles from "../styles/homeScreen_styles";
import useController from '../controllers/homeScreenController';
import AddChatModal from "../components/addChatModal";

const HomeScreen = () => {

    const {
        modalVisible,
        setModalVisible,
        sendGroup
    } = useController();
    
    return(
        <View style={styles.globalContainer} >
            
            <Spacer hspace={30}/>

            <View style={styles.appBar} >
                <Text style={styles.h1} >Bienvenido Emmanuel</Text>
            </View>

            <View style={styles.body} >
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
            />

        </View>
    )
}

export default HomeScreen;