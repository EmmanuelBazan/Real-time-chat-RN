import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatScreen from '../pages/chat/pages/chatScreen';
import HomeScreen from '../pages/home/pages/homeScreen';
import LoginScreen from '../pages/login/pages/loginScreen';
import MessageScreen from '../pages/message/pages/messageScreen';
import { StackParamList } from './stackParamList';

const Stack = createNativeStackNavigator<StackParamList>();

const StackNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerShown: false}} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="MessageScreen" component={MessageScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default StackNavigator;