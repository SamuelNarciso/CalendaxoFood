import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import PrincipalScreen from '../screens/PrincipalScreen';
import { StackNavigationDia } from './stackNavigationDia';
import DiaScreen from '../screens/DiaScreen';
import RecetasScreen from '../screens/RecetasScreen';
import DetallesRcetaScreen from '../screens/DetallesRcetaScreen';
import { StackNavigationRecetas } from './stackNavigationRecetas';
const Stack = createStackNavigator();

export const StackNavigationHome = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} />
            <Stack.Screen name="DiaScreen" component={DiaScreen} />
            <Stack.Screen name="DetallesRcetaScreen" component={DetallesRcetaScreen} />
            <Stack.Screen name="StackNavigationRecetas" component={StackNavigationRecetas} />
            {/* <Stack.Screen name="StackNavigationDia" component={StackNavigationDia} /> */}
        </Stack.Navigator>
    );
}