import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Spacer from "../../../widgets/spacer/spacer";

const HomeScreen = () => {
    return(
        <View style={styles.globalContainer} >
            <Spacer hspace={30}/>
            <View style={styles.appBar} >
                <Text style={styles.h1} >Bienvenido Emmanuel</Text>
            </View>
            <View style={styles.body} >
                <View style={styles.btncontainer} >
                    <TouchableOpacity>
                        <View style={styles.btn} >
                            <Text style={styles.txtbtn} >+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
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
        color: '#f5f5f5',
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
    }
});