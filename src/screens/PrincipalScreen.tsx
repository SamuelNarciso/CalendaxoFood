import React from 'react';
import {
    ScrollView,
    Text, TextInput, TouchableOpacity, View
} from 'react-native';
import { styles } from '../theme/appTheme';
const PrincipalScreen = () => {
    return (
        <View style={styles.principalContainer} >
            <View style={{borderBottomWidth:1, borderStyle:'solid',borderBottomColor:'#000'}}>
            <Text style={styles.textoCabecera} > Calendaxo Food </Text>

            </View>
            <View style={styles.contenedorItems} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Resumen</Text>
                <ScrollView style={styles.scrollView} horizontal={true}>

                    <TouchableOpacity style={styles.btnCuadrado}>
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} > Lunes </Text>
                            <Text style={{ fontSize: 18, marginBottom: 10 }} > 9 - May </Text>
                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.btnCuadrado}>
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} > Martes </Text>
                            <Text style={{ fontSize: 18, marginBottom: 10 }} > 10 - May </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}>
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} > Miercoles </Text>
                            <Text style={{ fontSize: 18, marginBottom: 10 }} > 11 - May </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}>
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} > Jueves </Text>
                            <Text style={{ fontSize: 18, marginBottom: 10 }} > 12 - May </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}>
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} > Viernes </Text>
                            <Text style={{ fontSize: 18, marginBottom: 10 }} > 13 - May </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}>
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} > Sabado </Text>
                            <Text style={{ fontSize: 18, marginBottom: 10 }} > 14 - May </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCuadrado}>
                        <View>
                            <Text
                                numberOfLines={1}
                                adjustsFontSizeToFit
                                style={{ fontSize: 25 }} > Domingo </Text>
                            <Text style={{ fontSize: 18, marginBottom: 10 }} > 15 - May </Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
            </View>

            <View style={{ ...styles.contenedorItems }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Lista de supermercado</Text>
                <ScrollView style={styles.scrollView} >
                    {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 1</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 2</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 3</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 4</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 5</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 6</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 7</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 8</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 9</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} >  Ingrediente 10</Text>
                    {/* </TextInput> */}
                </ScrollView>
            </View>

            <View style={{ ...styles.contenedorItems }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Valores corporales</Text>
                <ScrollView style={styles.scrollView} >
                    {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 1</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 2</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 3</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 4</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 5</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 6</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 7</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 8</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 9</Text>
                    <Text style={{ color: '#000', fontSize: 24 }} > Valor corporal 10</Text>
                    {/* </TextInput> */}
                </ScrollView>
            </View>





        </View>);
}
export default PrincipalScreen;