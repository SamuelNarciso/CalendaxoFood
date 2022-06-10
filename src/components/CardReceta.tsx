import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';

interface Props {
    nombre: string;
    color?: string;
    onpress: any;
    newStyles?: object;
    estiloLetra?: object;
}

const CardReceta = ({ nombre, color = '#f9c869', onpress, newStyles = {}, estiloLetra={} }: Props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: color, ...newStyles }}
            onPress={onpress}
        >
            <View>
                <Text
                    adjustsFontSizeToFit
                    style={{ fontSize: 25, marginBottom: 20, ...estiloLetra }} >{nombre}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default CardReceta;