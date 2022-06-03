//pagina de donde todo parte

import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import {
    Button,
    Text,
    View
} from 'react-native';

interface Props extends StackScreenProps<any, any> {};

const Pagina1Screen = ({navigation}: Props) => {
    return (<View  >
        <Text style={{ color: 'black', fontSize: 24 }}> Pagina 1 Screen </Text>
        
        <Text style={{ color: 'black', fontSize: 24 }}>  </Text>
        <Button
            title='Ir Pagina 2'
            onPress={ ()=>navigation.navigate('Pagina2Screen') }
        />
        <Text style={{ color: 'black', fontSize: 24 }}>  </Text>

        <Button
            title='Ir Detalles'
            onPress={ ()=>navigation.navigate('DetallesRcetaScreen') }
        />
    </View>);
}
export default Pagina1Screen;