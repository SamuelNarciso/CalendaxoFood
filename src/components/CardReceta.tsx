import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
interface Props {
    nombre: string;
    color?: string;
}

const CardReceta = ({ nombre, color='#95B665' }: Props) => {
    return (
        <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor:color }}>
            <View>
                <Text
                    adjustsFontSizeToFit
                    style={{ fontSize: 25, marginBottom: 20 }} >{nombre}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default CardReceta;