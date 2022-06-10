import React from 'react';
import { styles } from '../theme/appTheme';
import { TouchableOpacity, ScrollView } from 'react-native';
import CardReceta from '../components/CardReceta';
import { Text, View } from 'react-native';
import { buscarReceta } from '../assets/recetas';
import { StackScreenProps } from '@react-navigation/stack';
import { getDatosDia } from '../assets/usuario'; /*TODO: */


interface RouteParams {
    dia: string;
}

interface Props extends StackScreenProps<any, any> { }

const DiaScreen = ({ navigation, route }: Props) => {

    const params = route.params as RouteParams;

    const dia = params.dia;

    const { nombre: diaNombre, ...comidas } = getDatosDia(dia) /*TODO: */
    // console.log(comidas)

    const listaComidas = Object.keys(comidas)

    const capitalizar = (str: string) => {
        const low = str.toLowerCase()
        console.log(str)
        return (str.charAt(0).toUpperCase() + low.slice(1))
    }

    return (


        <View style={styles.principalContainer}>
            {/* Flecha caquera hacia atras. */}
            <View style={{
                borderBottomWidth: 1, borderStyle: 'solid',
                borderBottomColor: '#000'
            }}>
                {/* <TouchableOpacity
                    style={styles.btnRedondo}
                    onPress={() => navigation.popToTop()}
                >
                    <View>
                        <Text
                            adjustsFontSizeToFit
                            style={{ fontSize: 40, fontWeight: '800', color: 'white', marginBottom: 0 }} >{'←'} </Text>
                    </View>
                </TouchableOpacity> */}
                <Text style={{ ...styles.textoCabecera, marginTop: 0, color: 'black' }} >{diaNombre} </Text>
            </View>

            {/* Creador de las comidas */}
            <View style={{ height: '100%', paddingBottom: 100 }}>
                <ScrollView style={{}}>

                    {listaComidas.map(tipoComida => (
                        <View style={{ ...styles.contenedorItems, height: 'auto' }} key={tipoComida}>
                            <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} >{capitalizar(tipoComida)}</Text>

                            <CardReceta
                                newStyles={{ width: '100%' }}
                                estiloLetra={{ color: 'white' }}
                                color={(comidas[tipoComida]) ? '#82abfa' : '#fa82ab'}
                                nombre={(comidas[tipoComida]) ? buscarReceta(comidas[tipoComida]).nombre : 'No Asignado'}
                                key={comidas[tipoComida]}

                                onpress={
                                    (comidas[tipoComida]) ?
                                        () => navigation.navigate('DetallesRcetaScreen', { idReceta: buscarReceta(comidas[tipoComida]).id })
                                        : () => navigation.navigate('StackNavigationRecetas')
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

