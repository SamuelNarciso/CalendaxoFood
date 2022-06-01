import React from 'react';
import { styles } from '../theme/appTheme';
import { FlatList, ScrollView, Text, View } from 'react-native';

interface Props {
    nombre: string;
    tipo: string;
    ingredientes: any;
    pasos: any;
}

const DetallesRcetaScreen = ({
    nombre = 'Titulo Receta',

    tipo = 'Tipo',

    ingredientes = ['a',
     'b',
     'c'],
    pasos = ['z',
     'x',
     'y']
}: Props) => {
    return (
        <View style={styles.principalContainer}>

            <View style={{ borderBottomWidth: 1, borderStyle: 'solid',
             borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > {nombre} </Text>
                <Text style={styles.subTexto} > {tipo} </Text>
            </View>

            <View style={{ height: '100%',
             paddingBottom: 120 }}>
                <ScrollView style={{}}>
                    <View >
                        <Text style={{ marginVertical: 10, color: '#C95244',
                         fontSize: 28, fontWeight: '300' }}
                        >Ingredientes</Text>
                        <FlatList
                            data={ingredientes}
                            renderItem={({ item }) => <Text style={{ color: 'black',
                             fontSize: 22 }}
                            > ▸ {item}</Text>}
                        />
                    </View>
                    <View >
                        <Text style={{ marginVertical: 10, color: '#C95244',
                         fontSize: 28, fontWeight: '300' }}
                        >Instrucciones</Text>
                        <FlatList
                            data={pasos}
                            renderItem={({ item,index }) => <Text style={{ color: 'black',
                             fontSize: 22 }}
                            >{index+1}. {item} {'\n'}</Text>}
                        />
                    </View>
                </ScrollView>
            </View>

        </View>);
}
export default DetallesRcetaScreen;
