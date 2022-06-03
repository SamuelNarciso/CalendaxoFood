import React from 'react';
import { styles } from '../theme/appTheme';
import { TouchableOpacity, ScrollView } from 'react-native';
import CardReceta from '../components/CardReceta';
import {
    Text,
    View
} from 'react-native';
import { almuerzos, bebidas, cenas, desayunos, postres } from '../assets/recetas';
import { StackScreenProps } from '@react-navigation/stack';

interface RouteParams {
    nombre?: string;
}



interface Props extends StackScreenProps<any, any> { }

const DiaScreen = ({ 
    navigation,
    route,
 }: Props) => {
    const params = route.params as RouteParams;
    console.log(route)
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
                <Text style={{ ...styles.textoCabecera, marginTop: 0, color: 'black' }} >{' '} </Text>
                {/* <Text style={styles.subTexto} > {} </Text> */}
            </View>

            <View style={{ height: '100%', paddingBottom: 100 }}>
                <ScrollView style={{}}>

                    <View style={{ ...styles.contenedorItems, height: 'auto' }} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Desayuno</Text>
                        <CardReceta
                            newStyles={{ width: '100%' }}
                            color='#7C9D4B'
                            nombre={desayunos[0].nombre}
                            key={desayunos[0].nombre}
                            onpress={() => navigation.navigate('DetallesRcetaScreen',
                            {
                                nombre: desayunos[0].nombre,
                                ingredientes: desayunos[0].ingredientes,
                                pasos: desayunos[0].pasos,
                                tipo: desayunos[0].tipo
                            }
                        )}
                        />
                    </View>

                    <View style={{ ...styles.contenedorItems, height: 'auto' }} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Almuerzo</Text>
                        <CardReceta
                            newStyles={{ width: '100%' }}
                            color='#89AE54'
                            nombre={almuerzos[0].nombre}
                            key={almuerzos[0].nombre}
                            onpress={() => navigation.navigate('DetallesRcetaScreen',
                            {
                                nombre: almuerzos[0].nombre,
                                ingredientes: almuerzos[0].ingredientes,
                                pasos: almuerzos[0].pasos,
                                tipo: almuerzos[0].tipo
                            }
                        )}
                        />
                    </View>

                    <View style={{ ...styles.contenedorItems, height: 'auto' }} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Cena</Text>
                        <CardReceta
                            newStyles={{ width: '100%' }}
                            color='#89AE54'
                            nombre={cenas[0].nombre}
                            key={cenas[0].nombre}
                            onpress={() => navigation.navigate('DetallesRcetaScreen',
                            {
                                nombre: cenas[0].nombre,
                                ingredientes: cenas[0].ingredientes,
                                pasos: cenas[0].pasos,
                                tipo: cenas[0].tipo
                            }
                        )}
                        />
                    </View>

                    <View style={{ ...styles.contenedorItems, height: 'auto' }} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Bebida</Text>
                        <CardReceta
                            newStyles={{ width: '100%' }}
                            color='#A1BE76'
                            nombre={bebidas[0].nombre}
                            key={bebidas[0].nombre}
                            onpress={() => navigation.navigate('DetallesRcetaScreen',
                            {
                                nombre: bebidas[0].nombre,
                                ingredientes: bebidas[0].ingredientes,
                                pasos: bebidas[0].pasos,
                                tipo: bebidas[0].tipo
                            }
                        )}

                        />
                    </View>

                    <View style={{ ...styles.contenedorItems, height: 'auto' }} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Postre</Text>
                        <CardReceta
                            newStyles={{ width: '100%' }}
                            color='#A1BE76'
                            nombre={postres[0].nombre}
                            key={postres[0].nombre}
                            onpress={() => navigation.navigate('DetallesRcetaScreen',
                            {
                                nombre: postres[0].nombre,
                                ingredientes: postres[0].ingredientes,
                                pasos: postres[0].pasos,
                                tipo: postres[0].tipo
                            }
                        )}
                        />
                    </View>

                </ScrollView>
            </View>
        </View>

    );
}
export default DiaScreen;