import React, { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { socket } from "../../../../utils";
import Spacer from "../../../widgets/spacer/spacer";

const HomeScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    
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
                            console.log('try to connect...');
                            socket.emit('createNewGroup','groupName')
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

const styles = StyleSheet.create({
    globalContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#053e99',
    },
    appBar: {
        width: '100%',
        height: '8%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#053e99',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    body: {
        width: '100%',
        height: '92%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f5f5f5'
    },
    h1: {
        color: '#f5f5f5',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 25,
    },
    btn: {
        width: 50,
        height: 50,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#053e99',
        color: '#f5f5f5',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtbtn: {
        color: 'red',
        fontSize: 16,
        fontWeight: '700',
    },
    btncontainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 50
    },
    txtNormal: {
        color: '#080808',
        fontWeight: '500',
        fontSize: 14
    },
    txtbtnW: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 16
    },
    btnFill: {
        display: 'flex',
        flexDirection: 'column',
        paddingHorizontal: '35%',
        height: 40,
        backgroundColor: '#053e99',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnEmpty: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: '#000000b0'
    },
    modalView: {
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        backgroundColor: '#f5f5f5f5',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
});