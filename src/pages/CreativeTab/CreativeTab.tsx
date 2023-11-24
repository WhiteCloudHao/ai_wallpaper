import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './HomeScreen/Home';

const Stack = createNativeStackNavigator();

const CreativeTab = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right'}}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default CreativeTab;