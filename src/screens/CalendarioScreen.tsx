import React from 'react';
import { styles } from '../theme/appTheme';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { bebidas, desayunos, almuerzos, postres, cenas } from '../assets/recetas'
import CardReceta from '../components/CardReceta';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> { };

const CalendarioScreen = ({ navigation }: Props) => {
    return (
        <View style={styles.principalContainer}>
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Calendario  </Text>

            </View>

            {/* <View style={styles.calendario}>

            </View> */}

            {/* Comidas del dia */}
            <View style={styles.contenedorItems} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Comidas del dia</Text>
                <ScrollView style={styles.scrollView} horizontal={true}>



                    <CardReceta
                        color='#7C9D4B'
                        nombre={desayunos[0].nombre}
                        key={desayunos[0].nombre}
                        onpress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: desayunos[0].id }
                        )}
                    />
                    <CardReceta
                        color='#89AE54'
                        nombre={almuerzos[0].nombre}
                        key={almuerzos[0].nombre}
                        onpress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: almuerzos[0].id }
                        )}
                    />
                    <CardReceta
                        color='#95B665'
                        nombre={cenas[0].nombre}
                        key={cenas[0].nombre}
                        onpress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: cenas[0].id }

                        )}
                    />
                    <CardReceta
                        color='#A1BE76'
                        nombre={bebidas[0].nombre}
                        key={bebidas[0].nombre}
                        onpress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: bebidas[0].id }

                        )}
                    />
                    <CardReceta
                        color='#ADC688'
                        nombre={postres[0].nombre}
                        key={postres[0].nombre}
                        onpress={() => navigation.navigate('DetallesRcetaScreen',
                            { idReceta: postres[0].id }
                        )}
                    />


                </ScrollView>
            </View>

            {/* Proxima comida */}
            <View style={{ ...styles.contenedorItems, height: 400 }} >
                <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Proxima comida</Text>
                <ScrollView style={{ ...styles.scrollView, backgroundColor: '#C95244' }} >
                    {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                    <Text style={{ paddingTop: 10, color: '#FCF5E3', fontSize: 24 }} > Ingrediente 1</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Ingrediente 2</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Ingrediente 3</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Ingrediente 4</Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    <Text style={{ color: '#FCF5E3', fontSize: 24 }} > Descripcion de receta </Text>
                    {/* </TextInput> */}
                </ScrollView>
            </View>

        </View>);
}
export default CalendarioScreen;
