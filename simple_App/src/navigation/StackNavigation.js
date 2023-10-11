import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'; // Import NavigationContainer from @react-navigation/native
import Login from '../screens/Login';
import DownNavigation from './DownNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Login"> */}
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Down"
                    component={DownNavigation} // Use the DownNavigation component
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
