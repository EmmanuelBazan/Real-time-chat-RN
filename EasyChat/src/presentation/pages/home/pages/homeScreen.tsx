import React from "react";
import { Alert, Modal, Text, TextInput, TouchableOpacity, View } from "react-native"
import Spacer from "../../../widgets/spacer/spacer";
import styles from "../styles/homeScreen_styles";
import useController from '../controllers/homeScreenController';

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
                        <TextInput
                            style={{width: '100%', fontSize: 14, color: '#000000', fontFamily: 'BrandonGrotesque-Regular', height: 50, borderBottomColor: '#053e99', borderBottomWidth: 2}} 
                            placeholder={'Ingresa un nombre'} 
                            placeholderTextColor='#828282' 
                        />
                        <Spacer hspace={30} />
                        <TouchableOpacity onPress={() => {
                            sendGroup();
                            setModalVisible(false);
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

        </View>
    )
}

export default HomeScreen;