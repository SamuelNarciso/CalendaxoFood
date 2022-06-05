import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props {
    nombre: string;
    color?: string;
    onpress: any;
    newStyles?: object
}

const CardReceta = ({ nombre, color = '#F7B538', onpress, newStyles={} }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: color, ...newStyles }}
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