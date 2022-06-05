import React from 'react';
import { styles } from '../theme/appTheme';
import { TouchableOpacity, ScrollView } from 'react-native';
import CardReceta from '../components/CardReceta';
import { Text, View } from 'react-native';
import { buscarReceta } from '../assets/recetas';
import { StackScreenProps } from '@react-navigation/stack';
import { usuario } from '../assets/usuario';




interface Props extends StackScreenProps<any, any> { }

const DiaScreen = ({ navigation, route }: Props) => {
    const dia = navigation.getParent()?.getState().routes[1].params!.dia

    const { nombre: diaNombre, ...comidas } = usuario.getDatosDia(dia)
    // console.log(comidas)

    const listaComidas = Object.keys(comidas)

    return (


        <View style={styles.principalContainer}>
            {/* Flecha caquera hacia atras. */}
            <View style={{
                borderBottomWidth: 1, borderStyle: 'solid',
                borderBottomColor: '#000'
            }}>
                <TouchableOpacity
                    style={styles.btnRedondo}
                    onPress={() => navigation.popToTop()}
                >
                    <View>
                        <Text
                            adjustsFontSizeToFit
                            style={{ fontSize: 40, fontWeight: '800', color: 'black', marginBottom: 0 }} >{'←'} </Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ ...styles.textoCabecera, marginTop: 0, color: 'black' }} >{diaNombre} </Text>
            </View>

            {/* Creador de las comidas */}
            <View style={{ height: '100%', paddingBottom: 100 }}>
                <ScrollView style={{}}>

                    {listaComidas.map(e => (
                        <View style={{ ...styles.contenedorItems, height: 'auto' }} key={e}>
                            <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} >{e}</Text>

                            <CardReceta
                                newStyles={{ width: '100%' }}
                                color={(comidas[e]) ? '#7C9D4B' : '#C95244'}
                                nombre={(comidas[e]) ? buscarReceta(comidas[e]).nombre : 'No Asignado'}
                                key={comidas[e]}

                                onpress={
                                    (comidas[e]) ?
                                        () => navigation.navigate('DetallesRcetaScreen', { idReceta: buscarReceta(comidas[e]).id })
                                        : () => navigation.navigate('RecetasScreen')
                                }
                            />
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>

    );
}
export default DiaScreen;

