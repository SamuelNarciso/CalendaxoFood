import React, { useEffect } from 'react';
import { styles } from '../theme/appTheme';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { bebidas, desayunos, almuerzos, postres, cenas, buscarReceta } from '../assets/recetas';
import CardReceta from '../components/CardReceta';
import { StackScreenProps } from '@react-navigation/stack';
import { usuario } from '../assets/usuario';

interface Props extends StackScreenProps<any, any> { };

const CalendarioScreen = ({ navigation }: Props) => {
    const fecha = new Date()
    const dias = ['D', 'L', 'M', 'X', 'J', 'V', 'S',]
    const diaActual = dias[fecha.getDay()]
    const { nombre: diaNombre, ...comidas } = usuario.getDatosDia(diaActual)
    const listaComidas = Object.keys(comidas)



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
                            color={(comidas[e]) ? '#F7B538' : '#f75538'}
                            nombre={(comidas[e]) ? buscarReceta(comidas[e]).nombre : `No hay ${e} asignado`}
                            key={comidas[e] + index}

                            onpress={
                                (comidas[e]) ?
                                    () => navigation.navigate('DetallesRcetaScreen', { idReceta: buscarReceta(comidas[e]).id })
                                    : () => navigation.navigate('RecetasScreen')
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
                <ScrollView style={{ ...styles.scrollView, backgroundColor: '#F09D51' }} >
                    {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                    <Text style={{ paddingTop: 10, color: '#fff', fontSize: 24 }} > Ingrediente 1</Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Ingrediente 2</Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Ingrediente 3</Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Ingrediente 4</Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#fff', fontSize: 24 }} > Descripcion de receta </Text>
                    {/* </TextInput> */}
                </ScrollView>
            </View>

        </View>);
}
export default CalendarioScreen;
