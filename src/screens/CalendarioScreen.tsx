import React from 'react';
import { styles } from '../theme/appTheme';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { bebidas, desayunos, almuerzos, postres, cenas } from '../assets/recetas'
import CardReceta from '../components/CardReceta';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

const CalendarioScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.principalContainer}>
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Calendario  </Text>

            </View>

            {/* <View style={styles.calendario}>

            </View> */}

            {/* Comidas del dia */}
            <View style={styles.contenedorItems} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Comidas del dia</Text>
                <ScrollView style={styles.scrollView} horizontal={true}>



                    <CardReceta
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
                    <CardReceta
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
                    <CardReceta
                        color='#95B665'
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
                    <CardReceta
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
                    <CardReceta
                        color='#ADC688'
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


                </ScrollView>
            </View>

            {/* Proxima comida */}
            <View style={{ ...styles.contenedorItems, height: 400 }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Proxima comida</Text>
                <ScrollView style={{ ...styles.scrollView, backgroundColor: '#C95244' }} >
                    {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                    <Text style={{ paddingTop: 10, color: '#FCF5E3', fontSize: 24 }} > Ingrediente 1</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Ingrediente 2</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Ingrediente 3</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Ingrediente 4</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    {/* </TextInput> */}
                </ScrollView>
            </View>

        </View>);
}
export default CalendarioScreen;
