import { buscarReceta } from "./recetas";
import AsyncStorage from '@react-native-async-storage/async-storage';

// class Usuario {
//     constructor() {
//         dias = {
//             L: {
//                 nombre: 'Lunes',
//                 desayuno: 'd02',
//                 almuerzo: 'a04',
//                 cena: 'c03',
//                 postre: 'p10',
//                 bebida: 'b01',
//             },
//             M: {
//                 nombre: 'Martes',
//                 desayuno: 'd02',
//                 almuerzo: 'a04',
//                 cena: 'c03',
//                 postre: 'p10',
//                 bebida: 'b01',
//             },
//             X: {
//                 nombre: 'Miércoles',
//                 desayuno: 'd02',
//                 almuerzo: 'a04',
//                 cena: 'c03',
//                 postre: 'p10',
//                 bebida: 'b01',
//             },
//             J: {
//                 nombre: 'Jueves',
//                 desayuno: 'd02',
//                 almuerzo: 'a04',
//                 cena: 'c03',
//                 postre: 'p10',
//                 bebida: 'b01',
//             },
//             V: {
//                 nombre: 'Viernes',
//                 desayuno: 'd02',
//                 almuerzo: 'a04',
//                 cena: 'c03',
//                 postre: 'p10',
//                 bebida: 'b01',
//             },
//             S: {
//                 nombre: 'Sábado',
//                 desayuno: 'd02',
//                 almuerzo: 'a04',
//                 cena: 'c03',
//                 postre: 'p10',
//                 bebida: 'b01',
//             },
//             D: {
//                 nombre: 'Domingo',
//                 desayuno: 'd02',
//                 almuerzo: 'a04',
//                 cena: 'c03',
//                 postre: 'p10',
//                 bebida: 'b01',
//             },

//         }
//         nombreDias = ['L', 'M', 'X', 'J', 'V', 'S', 'D',]
//     }

//     asignarComida(dia, id) {
//         const tipo = id.charAt(0);

//         switch (tipo) {
//             case 'd':
//                 if (dias[dia].desayuno == id) {
//                     dias[dia].desayuno = null
//                 } else { dias[dia].desayuno = id }
//                 break;
//             case 'a':
//                 if (dias[dia].almuerzo == id) {
//                     dias[dia].almuerzo = null
//                 } else { dias[dia].almuerzo = id }
//                 break;
//             case 'c':
//                 if (dias[dia].cena == id) {
//                     dias[dia].cena = null
//                 } else { dias[dia].cena = id }
//                 break;
//             case 'p':
//                 if (dias[dia].postre == id) {
//                     dias[dia].postre = null
//                 } else { dias[dia].postre = id }
//                 break;
//             case 'b':
//                 if (dias[dia].bebida == id) {
//                     dias[dia].bebida = null
//                 } else { dias[dia].bebida = id }
//                 break;


//             default:
//                 break;
//         }

//     }

//     getDatosDia(dia) {
//         try {
//             console.log(dias)

//         } catch (error) {


//         }
//         const V= {
//             nombre: 'Viernes',
//             desayuno: 'd02',
//             almuerzo: 'a04',
//             cena: 'c03',
//             postre: 'p10',
//             bebida: 'b01',}

//         return V
//     }
//     getIdsComidaDiaEspecifico(dia) {
//         const { desayuno, almuerzo, cena, postre, bebida } = dias[dia]

//         return Object.values({ desayuno, almuerzo, cena, postre, bebida })

//     }

//     getIngredientes() {
//         const clavesComida = []

//         for (const clave in dias) {
//             const cadaDia = dias[clave];
//             for (const key in cadaDia) {
//                 const element = cadaDia[key];
//                 if (key != 'nombre') {

//                     element
//                         ? clavesComida.push(element)
//                         : null
//                 }

//             }
//         }

//         const ingredientes = (clavesComida.map(id => buscarReceta(id).ingredientes))
//         return (ingredientes.toString())
//     }

//     asignarDatosDelStorageADias() {

//         const getData = async () => {
//             try {
//                 const jsonValue = await AsyncStorage.getItem('datos')

//                 dias = JSON.parse(jsonValue);
//                 console.log('Datos asignados correctamente')
//             } catch (e) {
//                 // error reading value
//             }
//         }

//         getData()
//     }

//     guardarDatos() {

//         const storeData = async () => {
//             try {
//                 await AsyncStorage.setItem('datos', JSON.stringify(dias));
//                 await console.log('Datos guardados')
//             } catch (e) {
//                 // saving error
//             }
//         }
//         storeData()
//         asignarDatosDelStorageADias()
//     }
// }


const Usuario = {
    dias = {
        L: {
            nombre: 'Lunes',
            desayuno: 'd02',
            almuerzo: 'a04',
            cena: 'c03',
            postre: 'p10',
            bebida: 'b01',
        },
        M: {
            nombre: 'Martes',
            desayuno: 'd02',
            almuerzo: 'a04',
            cena: 'c03',
            postre: 'p10',
            bebida: 'b01',
        },
        X: {
            nombre: 'Miércoles',
            desayuno: 'd02',
            almuerzo: 'a04',
            cena: 'c03',
            postre: 'p10',
            bebida: 'b01',
        },
        J: {
            nombre: 'Jueves',
            desayuno: 'd02',
            almuerzo: 'a04',
            cena: 'c03',
            postre: 'p10',
            bebida: 'b01',
        },
        V: {
            nombre: 'Viernes',
            desayuno: 'd02',
            almuerzo: 'a04',
            cena: 'c03',
            postre: 'p10',
            bebida: 'b01',
        },
        S: {
            nombre: 'Sábado',
            desayuno: 'd02',
            almuerzo: 'a04',
            cena: 'c03',
            postre: 'p10',
            bebida: 'b01',
        },
        D: {
            nombre: 'Domingo',
            desayuno: 'd02',
            almuerzo: 'a04',
            cena: 'c03',
            postre: 'p10',
            bebida: 'b01',
        },

    }
}

nombreDias = ['L', 'M', 'X', 'J', 'V', 'S', 'D',]
const asignarComida = (dia, id) => {
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

const getDatosDia = (dia) => {
    try {
        console.log(dias)

    } catch (error) {


    }
    const V = {
        nombre: 'Viernes',
        desayuno: 'd02',
        almuerzo: 'a04',
        cena: 'c03',
        postre: 'p10',
        bebida: 'b01',
    }

    return V
}

const getIdsComidaDiaEspecifico = (dia) => {
    const { desayuno, almuerzo, cena, postre, bebida } = dias[dia]

    return Object.values({ desayuno, almuerzo, cena, postre, bebida })

}

const getIngredientes = () => {
    const clavesComida = []

    for (const clave in dias) {
        const cadaDia = dias[clave];
        for (const key in cadaDia) {
            const element = cadaDia[key];
            if (key != 'nombre') {

                element
                    ? clavesComida.push(element)
                    : null
            }

        }
    }

    const ingredientes = (clavesComida.map(id => buscarReceta(id).ingredientes))
    return (ingredientes.toString())
}

asignarDatosDelStorageADias() {

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('datos')

            dias = JSON.parse(jsonValue);
            console.log('Datos asignados correctamente')
        } catch (e) {
            // error reading value
        }
    }

    getData()
}

const guardarDatos = () => {

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




// export const usuario = new Usuario()