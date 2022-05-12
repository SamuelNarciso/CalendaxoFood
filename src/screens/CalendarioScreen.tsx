import React from 'react';
import { styles } from '../theme/appTheme';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
const CalendarioScreen = () => {
    return (<View style={styles.principalContainer}>
        <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
            <Text style={styles.textoCabecera} > Calendario </Text>

        </View>

        <View style={styles.calendario}>

        </View>

        {/* Comidas del dia */}
        <View style={styles.contenedorItems} >
            <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Comidas del dia</Text>
            <ScrollView style={styles.scrollView} horizontal={true}>

                <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                    <View>
                        <Text
                            // numberOfLines={1}
                            adjustsFontSizeToFit
                            style={{ fontSize: 25, marginBottom: 20 }} > Crumble de manzana  </Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                    <View>
                        <Text
                            // numberOfLines={1}
                            adjustsFontSizeToFit
                            style={{ fontSize: 25, marginBottom: 20 }} > Hot Cakes </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                    <View>
                        <Text
                            // numberOfLines={1}
                            adjustsFontSizeToFit
                            style={{ fontSize: 25, marginBottom: 20 }} > Pan Frances </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                    <View>
                        <Text
                            // numberOfLines={1}
                            adjustsFontSizeToFit
                            style={{ fontSize: 25, marginBottom: 20 }} > Atole de arroz </Text>
                    </View>
                </TouchableOpacity>


            </ScrollView>
        </View>

        {/* Proxima comida */}
        <View style={{ ...styles.contenedorItems }} >
            <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Proxima comida</Text>
            <ScrollView style={{ ...styles.scrollView, backgroundColor: '#C95244' }} >
                {/* <TextInput multiline={true} numberOfLines={100} style={{ color: '#000',fontSize: 24}} > */}
                <Text style={{ paddingTop:10, color: '#FCF5E3', fontSize: 24 }} > Ingrediente 1</Text>
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


// Si pudiera comenzar a ser 
// La mitad de lo que crees de mi 

// Cualquier cosa podría hacer 
// Y podría aprender amar 
// Como tú...

// Como
// Como tu... 

// Siempre creí que sería malo 
// Y ahora se que es verdad

// Porque, tu eres tan bueno 
// Y no soy como tu 

// Te has ido hoy 
// Y yo te adoro 
// Quisiera saber 

// ¿Que te hace pensar... que especial soy ?

//     Si pudiera comenzar a ser 
// Algo que este bien para ti 

// Cualquier cosa podría hacer 
// Y podría aprender... amar... 

// Cuando veo que actúas asi
// Me pregunto cuando volverás 

// Cualquier cosa podría hacer 
// Y podría aprender amar 
// Como tú
// Como tú 
// Amarme como tú
