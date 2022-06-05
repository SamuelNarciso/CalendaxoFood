import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalendarioScreen from '../screens/CalendarioScreen';
import PrincipalScreen from '../screens/PrincipalScreen';
import RecetasScreen from '../screens/RecetasScreen';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StackNavigationRecetas } from './stackNavigationRecetas';
import { StackNavigationHome } from './stackNavigationHome';
import { StackNavigationCalendario } from './stackNavigationCalendario';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#387af7',
                tabBarStyle: {
                    backgroundColor: '#FFC971',
                },
                tabBarIcon: (props) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Home':
                            iconName = "home-outline"
                            break;
                        case 'Recetas':
                            iconName = "receipt-outline"
                            break;
                        case 'Calendario':
                            iconName = "calendar-outline"
                            break;
                    }
                    return <Icon name={iconName} size={24} color={props.color} />
                }

            })}



        >

            <Tab.Screen name="Home"
                options={{ tabBarLabelStyle: { fontWeight: '400', fontSize: 14 } }}
                component={StackNavigationHome} />

            <Tab.Screen name="Recetas"
                options={{ tabBarLabelStyle: { fontWeight: '400', fontSize: 14 } }}
                component={StackNavigationRecetas} />

            <Tab.Screen name="Calendario"
                options={{ tabBarLabelStyle: { fontWeight: '400', fontSize: 14 } }}
                component={StackNavigationCalendario} />

                
        </Tab.Navigator>
    );


}
export default Tabs;