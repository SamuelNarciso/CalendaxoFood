import React from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { usuario } from '../assets/usuario';


interface Props extends StackScreenProps<any, any> { };

const PrincipalScreen = ({ navigation }: Props) => {

    return (
        <View style={styles.principalContainer} >
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Calendaxo Food </Text>

            </View>

            {/* Banner */}
            <View style={{ ...styles.contenedorItems, height: 220 }} >
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <TouchableOpacity style={{}}>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/crumble.jpg')}
                            blurRadius={5}>
                            <Text style={{ fontSize: 60, color: 'white' }}>Crumble de manzana</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/pollo.jpg')}
                            blurRadius={5}>
                            <Text style={{ fontSize: 60, color: 'white' }}>Pollo asado</Text>

                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/omelette.jpg')}
                            blurRadius={5}>
                            <Text style={{ fontSize: 60, color: 'white' }}>Huevos Napoleon</Text>
                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/limonada.jpg')}
                            blurRadius={5}>
                            <Text style={{ fontSize: 60, color: 'white' }}>Limonada de frambuesa</Text>

                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}

                            resizeMode='cover'
                            source={require('../assets/img/chescake.jpg')}
                            blurRadius={5}>
                            <Text style={{ fontSize: 60, color: 'white' }}>Cheesecake cookie</Text>

                        </ImageBackground>

                    </TouchableOpacity>

                </ScrollView>
            </View>

            {/* Resumen */}
            <View style={styles.contenedorItems} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} >Resumen</Text>

                <ScrollView style={styles.scrollView} horizontal={true}>
                    {
                        usuario.nombreDias.map((elemento: string, index) =>  <TouchableOpacity
                            style={{ ...styles.btnCuadrado, padding: 0, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => navigation.navigate('StackNavigationDia',
                                { dia: elemento }
                            )}
                            key={index}
                        >
                            <View>
                                <Text
                                    adjustsFontSizeToFit
                                    style={{ fontSize: 90, textAlign: 'center' }} > {elemento} </Text>
                            </View>
                        </TouchableOpacity>)
                    }

                </ScrollView>
            </View>

            {/* Lista del supermercado*/}
            <View style={{ ...styles.contenedorItems }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} >Lista de supermercado</Text>
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








        </View>);
}
export default PrincipalScreen;