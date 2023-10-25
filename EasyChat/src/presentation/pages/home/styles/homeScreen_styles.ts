import { StyleSheet } from "react-native";

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

export default styles;