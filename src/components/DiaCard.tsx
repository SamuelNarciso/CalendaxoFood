import React from 'react';
import { ImageBackground } from 'react-native';


const l = require('../assets/img/dias/l.png');
const m = require('../assets/img/dias/m.png');
const x = require('../assets/img/dias/x.png');
const j = require('../assets/img/dias/j.png');
const v = require('../assets/img/dias/v.png');
const d = require('../assets/img/dias/d.png');
const s = require('../assets/img/dias/s.png');

const nombresDias = {
    'L': l,
    'M': m,
    'X': x,
    'J': j,
    'V': v,
    'S': s,
    'D': d,

}

interface props {
    nombre: string
}


const DiaCard = ({ nombre }: props) => {
    const url = nombresDias[nombre]
    return (<ImageBackground
        style={{ paddingLeft: 0, width: "100%", flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        resizeMode='cover'
        source={url}
    >

    </ImageBackground>);
}
export default DiaCard;