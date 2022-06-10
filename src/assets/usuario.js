import { buscarReceta } from "./recetas";
import AsyncStorage from '@react-native-async-storage/async-storage';

export let dias = {
    L: {
        nombre: 'Lunes',
        desayuno: '',
        almuerzo: 'a01',
        cena: '',
        postre: '',
        bebida: '',
    },
    M: {
        nombre: 'Martes',
        desayuno: '',
        almuerzo: 'a04',
        cena: '',
        postre: 'p10',
        bebida: '',
    },
    X: {
        nombre: 'Miércoles',
        desayuno: '',
        almuerzo: 'a04',
        cena: 'c02',
        postre: '',
        bebida: '',
    },
    J: {
        nombre: 'Jueves',
        desayuno: '',
        almuerzo: '',
        cena: 'c02',
        postre: '',
        bebida: '',
    },
    V: {
        nombre: 'Viernes',
        desayuno: '',
        almuerzo: '',
        cena: '',
        postre: '',
        bebida: 'b08',
    },
    S: {
        nombre: 'Sábado',
        desayuno: 'd01',
        almuerzo: 'a06',
        cena: '',
        postre: '',
        bebida: '',
    },
    D: {
        nombre: 'Domingo',
        desayuno: 'd09',
        almuerzo: '',
        cena: '',
        postre: '',
        bebida: '',
    }


}

export const nombreDias = ['L', 'M', 'X', 'J', 'V', 'S', 'D',]

export const asignarComida = (dia, id) => {
    const tipo = id.charAt(0);

    switch (tipo) {
        case 'd':
            if (dias[dia].desayuno == id) {
                dias[dia].desayuno = null
            } else { dias[dia].desayuno = id }
            break;
        case 'a':
            if (dias[dia].almuerzo == id) {
                dias[dia].almuerzo = null
            } else { dias[dia].almuerzo = id }
            break;
        case 'c':
            if (dias[dia].cena == id) {
                dias[dia].cena = null
            } else { dias[dia].cena = id }
            break;
        case 'p':
            if (dias[dia].postre == id) {
                dias[dia].postre = null
            } else { dias[dia].postre = id }
            break;
        case 'b':
            if (dias[dia].bebida == id) {
                dias[dia].bebida = null
            } else { dias[dia].bebida = id }
            break;


        default:
            break;
    }

}

export const getDatosDia = (dia) => {
    try {
        console.log('Estoy enviando esto!!!')
        console.log({ dia })

        console.log({ dias })

    } catch (error) {

    }
    return dias[dia]
}

export const getIdsComidaDiaEspecifico = (dia) => {
    const { desayuno, almuerzo, cena, postre, bebida } = dias[dia]

    return Object.values({ desayuno, almuerzo, cena, postre, bebida })

}

export const getIngredientes = () => {
    let clavesComida = []

    for (const clave in dias) {
        const cadaDia = dias[clave];
        for (const key in cadaDia) {
            const element = cadaDia[key];
            if (key != 'nombre') {
                if (element) {
                    clavesComida.push(element)
                }
            }

        }
    }
    console.log('WGAAAAAAAAAAAAAAAAAA')
    console.log({ clavesComida })
    
    const ingredientes = (clavesComida.map(id => buscarReceta(id).ingredientes))
    return (ingredientes.toString())
}

export const asignarDatosDelStorageADias = () => {
    console.log('Pasando del storage al phone')
    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('datos')
            console.log(jsonValue)
            dias = JSON.parse(jsonValue);
            console.log('Datos asignados correctamente')
        } catch (e) {
            // error reading value
        }
    }

    getData()
}

export const guardarDatos = () => {

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('datos', JSON.stringify(dias));
            await console.log('Datos guardados')
        } catch (e) {
            // saving error
        }
    }
    storeData()
    asignarDatosDelStorageADias()
}


// export const = new Usuario()