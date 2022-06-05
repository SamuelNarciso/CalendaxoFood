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

    }
    getDatosDia(dia) {
        return this.dias[dia]
    }
}


export const usuario = new Usuario()