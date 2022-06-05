import React from 'react';
import { styles } from '../theme/appTheme';
import { bebidas, desayunos, almuerzos, postres, cenas } from '../assets/recetas'
import CardReceta from '../components/CardReceta';
import { StackScreenProps } from '@react-navigation/stack';

import {
    ScrollView,
    Text,
    View
} from 'react-native';

interface Props extends StackScreenProps<any, any> { };

const RecetasScreen = ({ navigation }: Props) => {

    return (
        <View style={styles.principalContainer} >
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Recetas </Text>
            </View>

            <View style={{ height: '100%', paddingBottom: 90 }}>
                <ScrollView style={{}}>

                    {/* Desayunos */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Desayunos</Text>
                        <ScrollView style={styles.scrollView} horizontal={true}>
                            {desayunos.map(e => <CardReceta
                                nombre={e.nombre}
                                key={e.id}
                                onpress={() => navigation.navigate('DetallesRcetaScreen',
                                    { idReceta: e.id }
                                )}
                            />)}
                        </ScrollView>
                    </View>

                    {/* Almuerzos */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Almuerzos</Text>
                        <ScrollView style={styles.scrollView} horizontal={true}>
                            {almuerzos.map(e => <CardReceta
                                nombre={e.nombre}
                                key={e.id} color='#C95244'
                                onpress={() => navigation.navigate('DetallesRcetaScreen',
                                    { idReceta: e.id }

                                )} />)}
                        </ScrollView>
                    </View>

                    {/* Cenas */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Cenas</Text>
                        <ScrollView style={styles.scrollView} horizontal={true}>
                            {cenas.map(e => <CardReceta
                                nombre={e.nombre}
                                key={e.id}
                                onpress={() => navigation.navigate('DetallesRcetaScreen',
                                    { idReceta: e.id }

                                )} />)}
                        </ScrollView>
                    </View>

                    {/* Bebidas */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Bebidas</Text>
                        <ScrollView style={styles.scrollView} horizontal={true}>
                            {bebidas.map(e => <CardReceta
                                nombre={e.nombre}
                                key={e.id}
                                color='#C95244'
                                onpress={() => navigation.navigate('DetallesRcetaScreen',
                                    { idReceta: e.id }

                                )} />)}
                        </ScrollView>
                    </View>

                    {/* Postres */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Postres</Text>
                        <ScrollView style={styles.scrollView} horizontal={true}>
                            {postres.map(e => <CardReceta
                                nombre={e.nombre}
                                key={e.id}
                                onpress={() => navigation.navigate('DetallesRcetaScreen',
                                    { idReceta: e.id }

                                )} />)}
                        </ScrollView>
                    </View>


                </ScrollView>

            </View>
        </View>);
}
export default RecetasScreen;