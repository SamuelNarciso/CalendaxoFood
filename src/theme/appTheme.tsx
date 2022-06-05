import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    fondo: {
        backgroundColor: '#FCF5E3',
        flex: 1,
        color: '#000000',

    },
    principalContainer: {
        flex: 1,
        paddingHorizontal: 20,
         justifyContent: 'flex-start',

        // backgroundColor: '#FCF5E3',
        backgroundColor: '#FCF5E3',
        color: '#393534',
        display: 'flex',
    },
    textoCabecera: {
        marginTop: 20,
        color: '#393534',
        textAlign: 'center',
        fontSize: 32

    },
    subTexto: {
        marginTop: 8,
        color: '#95B665',
        textAlign: 'center',
        fontSize: 24

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
        backgroundColor: '#95B665',
        width: 100,
        // height:100,
        marginRight: 10,
        justifyContent: 'flex-end',
        padding: 10,
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
        height:40,
        backgroundColor: '#FFDB25',
        textAlign: 'center',
        textAlignVertical: 'center',
        paddingBottom: 10,
        paddingLeft:8

    },
    calendario: {
        backgroundColor: '#A76D60',
        width: '100%',
        height: '32%',
        borderRadius: 6,
        marginTop: 20
    }
})