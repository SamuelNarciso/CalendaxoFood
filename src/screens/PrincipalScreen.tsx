import React, { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
 import { getIngredientes ,asignarDatosDelStorageADias,nombreDias} from '../assets/usuario'; //TODO: 
import DiaCard from '../components/DiaCard';

interface Props extends StackScreenProps<any, any> { };

const PrincipalScreen = ({ navigation }: Props) => {
    const [ingredientes, setingredientes] = useState([])
    useEffect(() => {

         asignarDatosDelStorageADias() //TODO: 
         let textoIngredientes = getIngredientes() //TODO: 
        const listaIngredientes = textoIngredientes.split(',')
        setingredientes(listaIngredientes)
        
    }, [])


    return (
        <View style={styles.principalContainer} >
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Calendaxo Food </Text>

            </View>

            {/* Banner */}
            <View style={{ ...styles.contenedorItems, height: 220 }} >
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: 'd01' }

                        )} style={{}}
                       
                    >
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/crumble.jpg')}
                            // blurRadius={5}
                        >
                            {/* <Text style={{ fontSize: 60, color: 'white' }}>Crumble de manzana</Text> */}
                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: 'a01' }

                        )}>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/pollo.jpg')}
                            // blurRadius={5}
                            >
                            {/* <Text style={{ fontSize: 60, color: 'white' }}>Pollo asado</Text> */}

                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: 'c01' }

                        )}>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/omelette.jpg')}
                            // blurRadius={5}
                            >
                            {/* <Text style={{ fontSize: 60, color: 'white' }}>Huevos Napoleon</Text> */}
                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: 'b01' }

                        )}>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}
                            resizeMode='cover'
                            source={require('../assets/img/limonada.jpg')}
                            // blurRadius={5}
                            >
                            {/* <Text style={{ fontSize: 60, color: 'white' }}>Limonada de frambuesa</Text> */}

                        </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: 'p01' }

                        )}>
                        <ImageBackground style={{ padding: 10, width: 380, flex: 1, display: 'flex', justifyContent: 'flex-end' }}

                            resizeMode='cover'
                            source={require('../assets/img/chescake.jpg')}
                            // blurRadius={5}
                            >
                            {/* <Text style={{ fontSize: 60, color: 'white' }}>Cheesecake cookie</Text> */}

                        </ImageBackground>

                    </TouchableOpacity>

                </ScrollView>
            </View>

            {/* Resumen */}
            <View style={{ ...styles.contenedorItems, height: 230 }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} >Resumen</Text>

                <ScrollView style={styles.scrollView} horizontal={true}>
                    {
                         nombreDias.map((elemento: string, index) => { //TODO: 


                            return (<TouchableOpacity
                                style={{ ...styles.btnCuadrado, padding: 0, justifyContent: 'flex-start', alignItems: 'flex-start', borderRadius: 12 }}
                                onPress={() => navigation.navigate('DiaScreen',
                                    { dia: elemento }
                                )}
                                key={index}
                            >

                                <View>
                                    <DiaCard key={index} nombre={elemento} />
                                </View>
                            </TouchableOpacity>)
                        })
                    }

                </ScrollView>
            </View>

            {/* Lista del supermercado*/}
            <View style={{ ...styles.contenedorItems }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} >Lista de supermercado</Text>
                <ScrollView style={{ ...styles.scrollView, borderTopColor: '#413F42', borderTopWidth: 1 }} >

                    {ingredientes.map((ingrediente, index) => (
                        <Text key={index} style={{
                            color: 'black', fontSize: 22,
                            fontWeight: '300'
                        }} >{ingrediente}</Text>))}


                </ScrollView>
            </View>








        </View>);
}
export default PrincipalScreen;