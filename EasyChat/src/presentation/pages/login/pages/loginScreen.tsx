import React from "react";
import {
    ImageBackground, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View 
} from "react-native";

const IMG = {uri: 'https://media.discordapp.net/attachments/1135676720142356492/1164326265583570944/emmanuel99._a_person_reading_a_message_on_the_phone_and_smiling_d41f07ee-eaba-4a4b-a82e-ada22efc7989.png?ex=6542ce55&is=65305955&hm=9097efb119c30b3af9d7b61b9770b1f895b87597f0b3b81f17c4743efc388255&=&width=466&height=831'};

const Spacer = ({hspace = 1}) => {
    return(
        <View style={{height: hspace}} ></View>
    )
}

const LoginScreen = () => {
    return(
        <View style={styles.container}>
            <ImageBackground source={IMG} resizeMode="cover" style={styles.image}>
                <View style={styles.mainContainer}>
                    <View style={styles.formContainer}>
                    <Text style={styles.h1} >Bienvenido</Text>
                        <Text style={styles.txtNormal} >Nombre de usuario</Text>
                        <TextInput
                            style={{width: '100%', fontSize: 14, color: '#000000', fontFamily: 'BrandonGrotesque-Regular', height: 50, borderBottomColor: '#053e99', borderBottomWidth: 2}} 
                            placeholder={'Ingresa tu nombre de usuario'} 
                            placeholderTextColor='#828282' 
                        />
                        <Spacer hspace={30} />
                        <TouchableOpacity>
                            <View style={styles.btnFill} >
                                <Text style={styles.txtbtnW} >Iniciar sesion</Text>
                            </View>
                        </TouchableOpacity>
                        <Spacer hspace={10} />
                        <TouchableOpacity>
                            <View style={styles.btnEmpty} >
                                <Text style={styles.txtbtn} >Registrarse</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
        height: '100%', 
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    formContainer: {
        backgroundColor: '#ffffffc0',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    h1: {
        color: '#080808',
        fontSize: 30,
        fontWeight: '800',
        marginBottom: 25,
    },
    txtNormal: {
        color: '#080808',
        fontWeight: '500',
        fontSize: 14
    },
    txtbtn: {
        color: '#053e99',
        fontWeight: 'bold',
        fontSize: 16
    },
    txtbtnW: {
        color: '#f5f5f5',
        fontWeight: 'bold',
        fontSize: 16
    },
    btnFill: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
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
    }
});