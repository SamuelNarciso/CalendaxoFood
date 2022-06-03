import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import RecetasScreen from '../screens/RecetasScreen';
import DetallesRcetaScreen from '../screens/DetallesRcetaScreen';
const Stack = createStackNavigator();

export const StackNavigationCalendario = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="RecetasScreen" component={RecetasScreen} />
            <Stack.Screen name="DetallesRcetaScreen" component={DetallesRcetaScreen} />
        </Stack.Navigator>
    );
}