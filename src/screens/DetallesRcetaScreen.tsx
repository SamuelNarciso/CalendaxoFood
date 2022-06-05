import React, { useEffect, useState } from 'react';
import { styles } from '../theme/appTheme';
import { FlatList, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import { buscarReceta } from '../assets/recetas';
import { usuario } from '../assets/usuario';

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
        for (const clave in usuario.dias) { idsDiaComida.push(usuario.dias[clave][tipo.toLowerCase()]) }
        setIdsComidas(idsDiaComida)
    }, [internetCheck])



    const asignarComida = (dia: string, index: number) => {
        let antiguoArr: any = [] = idsComidas;
        antiguoArr[index] = id

        if (antiguoArr[index] == id) {
            antiguoArr[index] = null
        } else { antiguoArr[index] = id }


        setIdsComidas(antiguoArr)
        usuario.asignarComida(dia, id)
        // console.log(idsComidas)
        usuario.guardarDatos()
    }

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
                            style={{ fontSize: 40, fontWeight: '800', color: 'white', marginBottom: 0 }} >{'←'} </Text>
                    </View>
                </TouchableOpacity>
                <Text style={{ ...styles.textoCabecera, marginTop: 0 }} > {nombre} </Text>
                <Text style={styles.subTexto} > {tipo} </Text>

            </View>

            <Text style={{ ...styles.subTexto, fontSize: 16, color: 'grey' }} >Agregar a</Text>
            <View style={{ marginTop: 5, display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>

                {usuario.nombreDias.map((dia, index) => (
                    <TouchableOpacity
                        key={index + dia}
                        style={
                            (idsComidas[index] && idsComidas[index] == id)
                                ? styles.botonCirculoPequenoPresionado
                                : styles.botonCirculoPequeno
                        }
                        onPress={() => {
                            asignarComida(dia, index);
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
                paddingBottom: 120
            }}>
                <ScrollView style={{}}>
                    <View >
                        <Text style={{
                            marginVertical: 10, color: '#C95244',
                            fontSize: 28, fontWeight: '300'
                        }}
                        >Ingredientes</Text>

                        {ingredientes.map((elem: string, index: number) => (
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 22,
                                    textAlign: 'justify'

                                }}
                                key={index}>▸ {elem}</Text>))}

                    </View>
                    <View >
                        <Text style={{
                            marginVertical: 10, color: '#C95244',
                            fontSize: 28, fontWeight: '300'
                        }}
                        >Instrucciones</Text>


                        {pasos.map((elem: string, index: number) => (
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 22,
                                    textAlign: 'justify'
                                }}
                                key={index}>{index + 1}. {elem} {'\n'}</Text>))}


                    </View>
                </ScrollView>
            </View>

        </View>);
}
export default DetallesRcetaScreen;
