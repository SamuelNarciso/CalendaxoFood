import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    fondo:{
        backgroundColor:'#FCF5E3',
        flex: 1,
        color:'#000000',
        
    },
    principalContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-start',
      
        backgroundColor:'#FCF5E3',
        color:'#393534',
        display:'flex',
    },
    textoCabecera:{
        marginTop:20,
        color:'#393534',
        textAlign:'center',
        fontSize:32
        
    },
    contenedorItems:{
        marginTop:20,
        width:'100%',
        height:'25%',
    },
    scrollView: {
        backgroundColor: '#E7DFC6',
        borderRadius:6,     
        padding:10, 
        width:'100%',
        display:'flex',
       
    },
 
    btnCuadrado:{
        borderRadius:4,
        backgroundColor:'#95B665',
        width:100,
        marginRight:10,
        justifyContent:'flex-end',
        padding:10,
    },
})