import {Text, TextInput, View, Image} from 'react-native';
import styles from './customInput_styles';

const CustomInput = ({
    title = "", 
    value = "",
    isOk = true, 
    inputName = "",
    errMessage = "", 
    placeholder = "",
    onChange = (text:string,inputName:string) => {console.log(text)}, 
}) => {
    return(
        <View style={styles.globalContainer} >
            <View style={styles.titleContainer} >
                <Text style={styles.titleStyle} >{title}</Text>
            </View>
            <View style={isOk ? styles.inputContainer : styles.inputContainerError} >
                <TextInput 
                    style={{width: '80%', fontSize: 18, color: '#000000', fontFamily: 'BrandonGrotesque-Regular', height: 50}} 
                    placeholder={placeholder} 
                    placeholderTextColor='#828282' 
                    onChangeText={text => onChange(text, inputName)}
                    value={value}
                />
            </View>
            {
                isOk ? 
                <></>
                :
                <View style={styles.errorContainerStyle} >
                    {/* <Icon name='close-circle-outline' size={20} color='#f33939' /> */}
                    {/* <Image source={require('assets/images/Icon_RedFail.png')} style={{resizeMode: 'contain', width: 18, height: 18}} /> */}
                    <Text style={styles.errorTextStyle}>{errMessage}</Text>
                </View>
            }
        </View>
    )
}

export default CustomInput;