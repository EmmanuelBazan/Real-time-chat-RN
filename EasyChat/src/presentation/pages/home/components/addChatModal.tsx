import React from "react";
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import CustomInput from "../../../widgets/customInput/customInput";
import Spacer from "../../../widgets/spacer/spacer";
import styles from "../styles/homeScreen_styles";

type InputFunction = (text: string, inputName: string) => void;

type props = {
    modalVisible: boolean
    setModalVisible: Function
    sendGroup: Function
    chatNameValue: string
    isChatName: boolean
    onChangeInput: InputFunction
    validateForm: () => boolean
}

const AddChatModal = ({
    modalVisible,
    setModalVisible,
    sendGroup,
    chatNameValue,
    isChatName,
    onChangeInput,
    validateForm
}: props) => {
    return(
        <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
            }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.txtNormal} >Agregar nuevo grupo</Text>
                        {/* <TextInput
                            style={{width: '100%', fontSize: 14, color: '#000000', fontFamily: 'BrandonGrotesque-Regular', height: 50, borderBottomColor: '#053e99', borderBottomWidth: 2}} 
                            placeholder={'Ingresa un nombre'} 
                            placeholderTextColor='#828282' 
                        /> */}
                        <CustomInput
                            placeholder="Ingresa un nombre"
                            value={chatNameValue}
                            title=""
                            inputName="chatName"
                            isOk={isChatName}
                            errMessage="Ingresa un nombre valido"
                            onChange={onChangeInput}
                        />
                        <Spacer hspace={30} />
                        <TouchableOpacity onPress={() => {
                            if(validateForm()) {
                                sendGroup();
                                setModalVisible(false);
                            }
                        }} >
                            <View style={styles.btnFill} >
                                <Text style={styles.txtbtnW} >Agregar</Text>
                            </View>
                        </TouchableOpacity>
                        <Spacer hspace={10} />
                        <TouchableOpacity onPress={() => setModalVisible(false)} >
                            <View style={styles.btnEmpty} >
                                <Text style={styles.txtbtn} >cancelar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    )
}

export default AddChatModal;