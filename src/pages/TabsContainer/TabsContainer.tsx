import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CreativeTab from "../CreativeTab/CreativeTab";
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import { Colors } from "../../utils/type";

const Tab = createBottomTabNavigator();

const TabsContainer = () => {
    return (
        <Tab.Navigator screenOptions={{ 
            headerShown: false,
            tabBarStyle: {
              height: 50
            },
            tabBarInactiveBackgroundColor: '#ffffff',
            
            tabBarLabelStyle: {
            }
          }}>
            <Tab.Screen
                name="CreativeTab"
                component={CreativeTab}
                options={{
                    title: 'Creative',
                    tabBarIcon: ({ focused, color, size }) => <Icon2 name="light-up" size={focused ? 28 : 25} color={color} />,
                    tabBarActiveTintColor: Colors.BASE
            }} />
        </Tab.Navigator>
    )
}

export default TabsContainer;