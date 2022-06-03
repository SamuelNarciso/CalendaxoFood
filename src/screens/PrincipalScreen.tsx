import React from 'react';
import {
    ScrollView,
    Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';


interface Props extends StackScreenProps<any, any> { };

const PrincipalScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.principalContainer} >
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Calendaxo Food </Text>

            </View>
            {/* Resumen */}
            <View style={styles.contenedorItems} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Resumen</Text>
                <ScrollView style={styles.scrollView} horizontal={true}>

                    <TouchableOpacity style={styles.btnCuadrado}
                        onPress={() => navigation.navigate('StackNavigationDia',
                            {
                                nombre: 'Lunes'
                            }
                        )}
                    >
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} >Lunes</Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.btnCuadrado}
                        onPress={() => navigation.navigate('StackNavigationDia',
                            {
                                nombre: 'Martes'
                            }
                        )}
                    >
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} >Martes</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}
                        onPress={() => navigation.navigate('StackNavigationDia',
                            {
                                nombre: 'Miércoles'
                            }
                        )}
                    >
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} >Miércoles</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}
                        onPress={() => navigation.navigate('StackNavigationDia',
                            {
                                nombre: 'Jueves'
                            }
                        )}
                    >
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} >Jueves</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}
                        onPress={() => navigation.navigate('StackNavigationDia',
                            {
                                nombre: 'Viernes'
                            }
                        )}
                    >
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} >Viernes</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}
                        onPress={() => navigation.navigate('StackNavigationDia',
                            {
                                nombre: 'Sábado'
                            }
                        )}
                    >
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} >Sábado</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}
                        onPress={() => navigation.navigate('StackNavigationDia',
                            {
                                nombre: 'Domingo'
                            }
                        )}
                    >
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} >Domingo</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            {/* Lista del supermercado*/}
            <View style={{ ...styles.contenedorItems }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Lista de supermercado</Text>
                <ScrollView style={{ ...styles.scrollView, backgroundColor: '#95B665' }} >
                    {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 1</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 2</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 3</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 4</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 5</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 6</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 7</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 8</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 9</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} >  Ingrediente 10</Text>
                    {/* </TextInput> */}
                </ScrollView>
            </View>


            {/* Valores corporales */}
            <View style={{ ...styles.contenedorItems }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Valores corporales</Text>
                <ScrollView style={{ ...styles.scrollView, backgroundColor: '#C95244' }} >
                    {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 1</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 2</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 3</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 4</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 5</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 6</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 7</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 8</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 9</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Valor corporal 10</Text>
                    {/* </TextInput> */}
                </ScrollView>
            </View>





        </View>);
}
export default PrincipalScreen;