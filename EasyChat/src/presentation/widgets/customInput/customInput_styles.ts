import { StyleSheet, Dimensions, Platform } from "react-native";

const WIDTH_SCREEN = Dimensions.get('screen').width
const HEIGTH_SCREEN = Dimensions.get('screen').height

const styles = StyleSheet.create({
    globalContainer: {
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        alignItems: 'flex-start',
        // backgroundColor: 'pink',
        width: '100%',
        // height: 100,
        marginBottom: 20
    },
    inputContainer: {
        color: 'grey',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        width: '100%',
        paddingLeft: 20
    },
    inputContainerError: {
        color: 'grey',
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#f33939',
        borderRadius: 5,
        width: '100%',
        paddingLeft: 20
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 5
    },
    titleStyle: {
        fontSize: 18,
        fontStyle: 'normal',
        color: '#000000',
        fontFamily: 'BrandonGrotesque-Regular',
    },
    errorContainerStyle: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    errorTextStyle: {
        fontSize: 14,
        color: 'black',
        marginLeft: 5,
        fontFamily: 'BrandonGrotesque-Regular'
    }
})

export default styles;