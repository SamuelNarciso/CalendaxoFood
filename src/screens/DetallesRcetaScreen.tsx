import React from 'react';
import { styles } from '../theme/appTheme';
import { FlatList, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface RouteParams {
    nombre?: string;
    tipo?: string;
    ingredientes?: any;
    pasos?: any;
}

interface Props extends StackScreenProps<any, any> { }

const DetallesRcetaScreen = ({
    navigation,
    route
}: Props) => {



    const params = route.params as RouteParams;

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
                            style={{ fontSize:40, fontWeight:'800' , color: 'black', marginBottom: 0 }} >{'←'} </Text>
                    </View>
                </TouchableOpacity>
                <Text style={{...styles.textoCabecera, marginTop:0}} > {params.nombre} </Text>
                <Text style={styles.subTexto} > {params.tipo} </Text>
            </View>

            <View style={{
                height: '100%',
                paddingBottom: 120
            }}>
                <ScrollView style={{}}>
                    <View >
                        <Text style={{
                            marginVertical: 10, color: '#C95244',
                            fontSize: 28, fontWeight: '300'
                        }}
                        >Ingredientes</Text>

                        {params.ingredientes.map((elem: string, index: number) => (
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


                        {params.pasos.map((elem: string, index: number) => (
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
