import React from 'react';
import { styles } from '../theme/appTheme';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
const RecetasScreen = () => {
    return (
        <View style={styles.principalContainer} >
            <View style={{ borderBottomWidth: 1, borderStyle: 'solid', borderBottomColor: '#000' }}>
                <Text style={styles.textoCabecera} > Recetas </Text>
            </View>
            <View style={{ height: '100%', paddingBottom: 100 }}>
                <ScrollView style={{}}>

                    {/* Desayunos */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Desayunos</Text>
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

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Chilaquiles rojos </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Atole de glorias </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View >
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Lentejas </Text>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>

                    {/* Almuerzos */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Almuerzos</Text>
                        <ScrollView style={styles.scrollView} horizontal={true}>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: '#C95244' }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Crumble de manzana  </Text>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: '#C95244' }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Hot Cakes </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: '#C95244' }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Pan Frances </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: '#C95244' }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Atole de arroz </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: '#C95244' }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Chilaquiles rojos </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: '#C95244' }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Atole de glorias </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular, backgroundColor: '#C95244' }}>
                                <View >
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Lentejas </Text>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>

                    {/* Cenas */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Cenas</Text>
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

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Chilaquiles rojos </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Atole de glorias </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View >
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Lentejas </Text>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>
                    </View>

                    {/* Postres */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Postres</Text>
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

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Chilaquiles rojos </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Atole de glorias </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View >
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Lentejas </Text>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>


                    </View>
                    {/* Bebidas */}
                    <View style={styles.contenedorItems} >
                        <Text style={{ color: '#000', fontSize: 24, fontWeight: '300' }} > Bebidas</Text>
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

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Chilaquiles rojos </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View>
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Atole de glorias </Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.btnCuadrado, ...styles.btnRectangular }}>
                                <View >
                                    <Text
                                        // numberOfLines={1}
                                        adjustsFontSizeToFit
                                        style={{ fontSize: 25, marginBottom: 20 }} > Lentejas </Text>
                                </View>
                            </TouchableOpacity>

                        </ScrollView>


                    </View>

                </ScrollView>

            </View>
        </View>);
}
export default RecetasScreen;