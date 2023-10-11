import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from '../screens/Home';
import QrScreen from '../screens/Qr';
import HistoryScreen from '../screens/History';
import UserScreen from '../screens/User';
import colors from '../../assets/colors';

// Screens Names
const homeName = "Home";
const qrName = "Qr";
const historyName = "History";
const userName = "User";

const Tab = createBottomTabNavigator();

export default function DownNavigation() {
    return (

        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === qrName) {
                        iconName = focused ? 'list' : 'list-outline'
                    }
                    else if (rn === historyName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }
                    else if (rn === userName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />

                },
                "tabBarActiveTintColor": colors.BLUE,
                "tabBarInactiveTintColor": "grey",
                "tabBarLabelStyle": {
                    "paddingBottom": 10,
                    "fontSize": 10
                },
                "tabBarStyle": [
                    {
                        "display": "flex"
                    },
                    null
                ]
            })}
        >
            <Tab.Screen
                name={homeName}
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={qrName}
                component={QrScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={historyName}
                component={HistoryScreen}
                options={{ headerShown: false }}
            />
            <Tab.Screen
                name={userName}
                component={UserScreen}
                options={{ headerShown: false }}
            />
        </Tab.Navigator>

    );
}