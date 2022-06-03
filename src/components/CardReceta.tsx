import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props {
    nombre: string;
    color?: string;
    onpress: any;
}

const CardReceta = ({ nombre, color='#95B665', onpress }: Props) => {
    return (
        <TouchableOpacity 
        style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor:color }}
        onPress={onpress}
        >
            <View>
                <Text
                    adjustsFontSizeToFit
                    style={{ fontSize: 25, marginBottom: 20 }} >{nombre}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default CardReceta;