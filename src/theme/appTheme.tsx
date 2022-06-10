import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#77D8B8',
        flex: 1,

    },
    fontMont: {
        fontFamily: 'Montserrat-VariableFont_wght'
    },

    principalContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',

        // backgroundColor: '#FCF5E3',
        backgroundColor: '#FFFFFF',
        color: '#393534',
        display: 'flex',
    },
    textoCabecera: {
        marginTop: 20,
        color: '#393534',
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'Lato-Regular',

    },
    subTexto: {
        marginTop: 8,
        color: '#77D8B8',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Lato-Regular',

    },
    contenedorItems: {
        marginTop: 8,
        width: '100%',
        height: 170,
    },
    scrollView: {
        // backgroundColor: '#E7DFC6',
        borderRadius: 6,
        // padding: 10,
        width: '100%',
        height: 20,
        display: 'flex',

    },

    btnCuadrado: {

        borderRadius: 4,
        backgroundColor: '#82abfa',
        width: 120,
        // height:100,
        marginRight: 10,
        justifyContent: 'flex-end',
        padding: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    btnRectangular: {
        justifyContent: 'flex-start',
        width: 200,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.52,
        shadowRadius: 2.22,
        elevation: 5,

    },
    btnRedondo: {
        borderRadius: 100,
        width: 40,
        height: 40,
        backgroundColor: '#E2711D',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 10,
        paddingLeft: 8

    },


    botonCirculoPequeno: {
        width: 38,
        height: 38,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    botonCirculoPequenoPresionado: {
        width: 38,
        height: 38,
        backgroundColor: '#77D8B8',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textoNoPresionado: {
        color: 'grey',
        fontFamily: 'Lato-Regular',
        fontSize: 22,

    },

    textoPresionado: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 22,
    }

})
