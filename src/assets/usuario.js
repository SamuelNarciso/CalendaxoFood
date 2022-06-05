import { buscarReceta } from "./recetas";
import AsyncStorage from '@react-native-async-storage/async-storage';

class Usuario {
    constructor() {
        this.dias = {
            L: {
                nombre: 'Lunes',
                desayuno: null,
                almuerzo: null,
                cena: null,
                postre: null,
                bebida: null,
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
                desayuno: null,
                almuerzo: null,
                cena: null,
                postre: null,
                bebida: null,
            },
            J: {
                nombre: 'Jueves',
                desayuno: null,
                almuerzo: null,
                cena: null,
                postre: null,
                bebida: null,
            },
            V: {
                nombre: 'Viernes',
                desayuno: null,
                almuerzo: null,
                cena: null,
                postre: null,
                bebida: null,
            },
            S: {
                nombre: 'Sábado',
                desayuno: null,
                almuerzo: null,
                cena: null,
                postre: null,
                bebida: null,
            },
            D: {
                nombre: 'Domingo',
                desayuno: null,
                almuerzo: null,
                cena: null,
                postre: null,
                bebida: null,
            },

        }
        this.nombreDias = ['L', 'M', 'X', 'J', 'V', 'S', 'D',]
    }

    asignarComida(dia, id) {
        const tipo = id.charAt(0);

        switch (tipo) {
            case 'd':
                if (this.dias[dia].desayuno == id) {
                    this.dias[dia].desayuno = null
                } else { this.dias[dia].desayuno = id }
                break;
            case 'a':
                if (this.dias[dia].almuerzo == id) {
                    this.dias[dia].almuerzo = null
                } else { this.dias[dia].almuerzo = id }
                break;
            case 'c':
                if (this.dias[dia].cena == id) {
                    this.dias[dia].cena = null
                } else { this.dias[dia].cena = id }
                break;
            case 'p':
                if (this.dias[dia].postre == id) {
                    this.dias[dia].postre = null
                } else { this.dias[dia].postre = id }
                break;
            case 'b':
                if (this.dias[dia].bebida == id) {
                    this.dias[dia].bebida = null
                } else { this.dias[dia].bebida = id }
                break;


            default:
                break;
        }

    }

    getDatosDia(dia) {
        return this.dias[dia]
    }

    getIngredientes() {
        const clavesComida = []

        for (const clave in this.dias) {
            const cadaDia = this.dias[clave];
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

                this.dias = JSON.parse(jsonValue);
                console.log('Datos asignados correctamente')
            } catch (e) {
                // error reading value
            }
        }

        getData()
    }

    guardarDatos() {

        const storeData = async () => {
            try {
                await AsyncStorage.setItem('datos', JSON.stringify(this.dias));
                await console.log('Datos guardados')
            } catch (e) {
                // saving error
            }
        }
        // const jeison = JSON.stringify(this.dias)
        // const noJeison=  JSON.parse(jeison)
        // console.log(typeof jeison)
        // console.log('--\n\n')
        // console.log(typeof noJeison)


        storeData()
        this.asignarDatosDelStorageADias()
    }
}


export const usuario = new Usuario()