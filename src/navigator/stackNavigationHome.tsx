import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import DetallesRcetaScreen from '../screens/DetallesRcetaScreen';
import PrincipalScreen from '../screens/PrincipalScreen';
const Stack = createStackNavigator();

export const StackNavigationHome = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen name="PrincipalScreen" component={PrincipalScreen} />
            <Stack.Screen name="DetallesRcetaScreen" component={DetallesRcetaScreen} />
        </Stack.Navigator>
    );
}