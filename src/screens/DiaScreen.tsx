import React from 'react';
import { styles } from '../theme/appTheme';
import { TouchableOpacity, ScrollView } from 'react-native';
import CardReceta from '../components/CardReceta';
import { Text, View } from 'react-native';
import { buscarReceta } from '../assets/recetas';
import { StackScreenProps } from '@react-navigation/stack';
import { usuario } from '../assets/usuario';

interface RouteParams {
    nombre?: string;
}



interface Props extends StackScreenProps<any, any> { }

const DiaScreen = ({ navigation, route }: Props) => {
    // const params = route.params as RouteParams;
    // console.log( navigation.getParent()?.getState().routes[1].params!.dia  )
    const dia = navigation.getParent()?.getState().routes[1].params!.dia
    const { nombre: diaNombre, ...comidas } = usuario.getDatosDia(dia)
    const listaComidas = Object.keys(comidas)

    return (

        <View style={styles.principalContainer}>

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


            <View style={{ height: '100%', paddingBottom: 100 }}>
                <ScrollView style={{}}>

                    {listaComidas.map(e => (
                        <View style={{ ...styles.contenedorItems, height: 'auto' }} >
                            <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} >{e}</Text>

                            <CardReceta
                                newStyles={{ width: '100%' }}
                                color={(comidas[e]) ? '#7C9D4B' : '#C95244'}
                                nombre={(comidas[e]) ? buscarReceta(comidas[e]).nombre : 'No Asignado'}
                                key={comidas[e]}

                                onpress={
                                    (true) ?
                                        () => navigation.navigate('RecetasScreen')
                                        : () => navigation.navigate('DetallesRcetaScreen', { idReceta: buscarReceta(comidas[e]).id })
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

