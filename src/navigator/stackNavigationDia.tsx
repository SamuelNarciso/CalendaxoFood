import React from 'react';

import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import RecetasScreen from '../screens/RecetasScreen';
import DiaScreen from '../screens/DiaScreen';
import DetallesRcetaScreen from '../screens/DetallesRcetaScreen';
const Stack = createStackNavigator();


interface Props extends StackScreenProps<any, any> { }

export const StackNavigationDia = ({route}:Props) => {
    console.log(route)
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen  name="DiaScreen" component={DiaScreen} />
            <Stack.Screen  name="DetallesRcetaScreen" component={DetallesRcetaScreen} />
        </Stack.Navigator>
    );
}