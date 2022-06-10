import React, { useEffect, useState } from 'react';
import { styles } from '../theme/appTheme';
import { ImageBackground, ScrollView, Text, View } from 'react-native';
import { bebidas, desayunos, almuerzos, postres, cenas, buscarReceta } from '../assets/recetas';
import CardReceta from '../components/CardReceta';
import { StackScreenProps } from '@react-navigation/stack';
import { getDatosDia, getIdsComidaDiaEspecifico } from '../assets/usuario'; /*TODO */

interface Props extends StackScreenProps<any, any> { };

const CalendarioScreen = ({ navigation }: Props) => {
    const fecha = new Date()
    const dias = ['D', 'L', 'M', 'X', 'J', 'V', 'S',]
    const diaActual = dias[fecha.getDay()]
    console.log({diaActual})
    const { nombre: diaNombre, ...comidas } = getDatosDia(diaActual) /*TODO */

    const listaComidas = Object.keys(comidas)
    const [clavesComidas, setClavesComidas] = useState(getIdsComidaDiaEspecifico(diaActual)) /*TODO */
    let ProximaComida: any = null
    let nombreComida = '', ingredientesComida: any[] = [], pasosComida: any[] = []
    useEffect(() => {
        console.log({ clavesComidas })
        // console.log(listaComidas)


    }, [clavesComidas])
    const hora = fecha.getHours()
    if (hora >= 0 && hora < 12 && clavesComidas[0]) {
        console.log('Hora del desayuno')
        ProximaComida = buscarReceta(clavesComidas[0])

    }
    if (hora >= 12 && hora < 18 && clavesComidas[1]) {
        console.log('Hora del Almuerzo')
        ProximaComida = buscarReceta(clavesComidas[1])

    }
    if (hora >= 18 && hora <= 23 && clavesComidas[2]) {
        console.log('Hora del Cena')
        ProximaComida = buscarReceta(clavesComidas[2])

    }
    if (ProximaComida == null) {
        ProximaComida = buscarReceta(clavesComidas[0])
            || buscarReceta(clavesComidas[1])
            || buscarReceta(clavesComidas[2])
            || buscarReceta('a01')
    }
    console.log(ProximaComida.nombre)
    nombreComida = ProximaComida.nombre
    ingredientesComida = ProximaComida.ingredientes
    pasosComida = ProximaComida.pasos


    return (
        <View style={styles.principalContainer}>
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Calendario  </Text>

            </View>



            {/* Comidas del dia */}
            <View style={styles.contenedorItems} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Comidas del dia</Text>
                <ScrollView style={styles.scrollView} horizontal={true}>

                    {listaComidas.map((e, index) => (


                        <CardReceta
                            color={(comidas[e]) ? '#82abfa' : '#fa82ab'}
                            nombre={(comidas[e]) ? buscarReceta(comidas[e]).nombre : `No hay ${e} asignado`}
                            key={comidas[e] + index}

                            onpress={
                                (comidas[e]) ?
                                    () => navigation.navigate('DetallesRcetaScreen', {
                                        idReceta: buscarReceta(comidas[e]).id
                                    })
                                    : () => navigation.navigate('Recetas')
                            }
                        />


                    ))}

                    {/*                     
                    <CardReceta
                        color='#ADC688'
                        nombre={postres[0].nombre}
                        key={postres[0].nombre}
                        onpress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: postres[0].id }
                        )}
                    /> */}


                </ScrollView>
            </View>

            {/* Proxima comida */}
            <View style={{ ...styles.contenedorItems, height: 400 }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Proxima comida</Text>
                <ScrollView style={{ ...styles.scrollView }} >
                    <Text style={{ fontSize: 28, color: '#000' }}>{nombreComida}</Text>
                    <Text style={{ fontSize: 24, color: '#000', marginVertical: 10 }}>Ingredientes</Text>

                    {ingredientesComida.map((elem: string, index: number) => (
                        <Text
                            style={{
                                fontFamily: 'Lato-Regular',
                                color: '#000',
                                fontSize: 22,
                                textAlign: 'justify',
                                marginVertical: 5

                            }}
                            key={index}>▸ {elem}</Text>))}

                    <Text style={{ fontSize: 24, color: '#000', marginVertical: 10 }}>Pasos</Text>

                    {pasosComida.map((elem: string, index: number) => (
                        <Text
                            style={{
                                fontFamily: 'Lato-Regular',
                                color: '#000',
                                fontSize: 22,
                                textAlign: 'justify',
                                marginVertical: 5

                            }}
                            key={index}>{index}. {elem}</Text>))}

                </ScrollView>
            </View>

        </View>);
}
export default CalendarioScreen;
