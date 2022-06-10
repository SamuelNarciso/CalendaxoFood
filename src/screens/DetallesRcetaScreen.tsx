import React, { useEffect, useState } from 'react';
import { styles } from '../theme/appTheme';
import { FlatList, ScrollView, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import { buscarReceta } from '../assets/recetas';
import { dias,guardarDatos,asignarComida,nombreDias } from '../assets/usuario'; /*TODO: */

const Desayuno = require('../assets/img/backgrounds/des.jpg')
const Almuerzo = require('../assets/img/backgrounds/almuerzo.jpg')
const Cena = require('../assets/img/backgrounds/cena.jpg')
const Bebida = require('../assets/img/backgrounds/bebi.jpg')
const Postre = require('../assets/img/backgrounds/pos.jpg')

const fondo:any = {
    Desayuno,
    Almuerzo,
    Cena,
    Bebida,
    Postre,
}


interface RouteParams {
    idReceta: string;
}

interface Props extends StackScreenProps<any, any> { }


const DetallesRcetaScreen = ({

    navigation,
    route
}: Props) => {
    const [idsComidas, setIdsComidas] = useState([]);
    const [internetCheck, setInternetCheck] = useState(0);

    const params = route.params as RouteParams;
    const { id, nombre, ingredientes, pasos, tipo } = buscarReceta(params.idReceta)
    const idsDiaComida: any = [] = []

    useEffect(() => {
        for (const clave in dias) { idsDiaComida.push(dias[clave][tipo.toLowerCase()]) } /*TODO: */
        setIdsComidas(idsDiaComida)
    }, [internetCheck])



    const asignarComidaDetalles = (dia: string, index: number) => {
        let antiguoArr: any = [] = idsComidas;
        antiguoArr[index] = id

        if (antiguoArr[index] == id) {
            antiguoArr[index] = null
        } else { antiguoArr[index] = id }


        setIdsComidas(antiguoArr)
        asignarComida(dia, id) /*TODO: */
        // console.log(idsComidas)
        guardarDatos() /*TODO: */
    }

    return (
        <View style={{ ...styles.principalContainer, paddingHorizontal: 0 }}>

            <ImageBackground
                source={fondo[tipo]}
                resizeMode={'cover'}
                blurRadius={1}

                imageStyle={{

                    backgroundColor: 'rgba(0,0,0,.16)',
                    opacity: 1
                }}
            >
                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.70)',
                    paddingHorizontal: 20
                }}>
                    <View style={{
                        borderBottomWidth: 1, borderStyle: 'solid',
                        borderBottomColor: '#413F42'
                    }}>

                        <Text style={{ ...styles.textoCabecera, marginTop: 10, color: '#fff' }} > {nombre} </Text>
                        <Text style={styles.subTexto} > {tipo} </Text>

                    </View>

                    <Text style={{ ...styles.subTexto, fontSize: 18, color: '#fcfcfc' }} >Agregar a</Text>
                    <View style={{ marginTop: 5, marginBottom: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                        {nombreDias.map((dia, index) => ( /*TODO: */
                            <TouchableOpacity
                                key={index + dia}
                                style={
                                    (idsComidas[index] && idsComidas[index] == id)
                                        ? styles.botonCirculoPequenoPresionado
                                        : styles.botonCirculoPequeno
                                }
                                onPress={() => {
                                    asignarComidaDetalles(dia, index);
                                    setInternetCheck(internetCheck + 1)
                                }}
                            >
                                <Text adjustsFontSizeToFit={true}
                                    style={
                                        (idsComidas[index] && idsComidas[index] == id)
                                            ? styles.textoPresionado
                                            : styles.textoNoPresionado
                                    }
                                >{dia}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <View style={{
                        height: '92%',
                        paddingBottom: 318
                    }}>
                        <ScrollView style={{}}>
                            <View >
                                <Text style={{
                                    marginVertical: 10, color: '#77D8B8',
                                    fontSize: 28, fontWeight: '300'
                                }}
                                >Ingredientes</Text>

                                {ingredientes.map((elem: string, index: number) => (
                                    <Text
                                        style={{
                                            fontFamily: 'Lato-Regular',
                                            color: '#fff',
                                            fontSize: 22,
                                            textAlign: 'justify'

                                        }}
                                        key={index}>▸ {elem}</Text>))}

                            </View>
                            <View >
                                <Text style={{
                                    marginVertical: 10, color: '#77D8B8',
                                    fontSize: 28, fontWeight: '300'
                                }}
                                >Instrucciones</Text>


                                {pasos.map((elem: string, index: number) => (
                                    <Text
                                        style={{
                                            fontFamily: 'Lato-Regular',
                                            color: '#fff',
                                            fontSize: 22,
                                            textAlign: 'justify'
                                        }}
                                        key={index}>{index + 1}. {elem} {'\n'}</Text>))}


                            </View>
                        </ScrollView>
                    </View>

                </View>
            </ImageBackground>

        </View>);
}
export default DetallesRcetaScreen;
