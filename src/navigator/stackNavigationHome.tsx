import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import PrincipalScreen from '../screens/PrincipalScreen';
import { StackNavigationDia } from './stackNavigationDia';
import DiaScreen from '../screens/DiaScreen';
import RecetasScreen from '../screens/RecetasScreen';
const Stack = createStackNavigator();

export const StackNavigationHome = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} />
            <Stack.Screen name="StackNavigationDia" component={StackNavigationDia} />
            <Stack.Screen name="RecetasScreen" component={RecetasScreen} />
            {/* <Stack.Screen name="StackNavigationDia" component={StackNavigationDia} /> */}
        </Stack.Navigator>
    );
}