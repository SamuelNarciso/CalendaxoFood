import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import RecetasScreen from '../screens/RecetasScreen';
import DetallesRcetaScreen from '../screens/DetallesRcetaScreen';
import CalendarioScreen from '../screens/CalendarioScreen';
import DiaScreen from '../screens/DiaScreen';
const Stack = createStackNavigator();

export const StackNavigationCalendario = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="RecetasScreen" component={CalendarioScreen} />
            <Stack.Screen name="DetallesRcetaScreen" component={DetallesRcetaScreen} />
        </Stack.Navigator>
    );
}