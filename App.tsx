import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView, StatusBar
} from 'react-native';
import Tabs from './src/navigator/bottomTabNavigation';
import { styles } from './src/theme/appTheme';
import DetallesRcetaScreen from './src/screens/DetallesRcetaScreen';
import { desayunos } from './src/assets/recetas';
import { StackNavigation } from './src/navigator/stackNavigation';


const App = () => {
  return (

    <NavigationContainer>
      <SafeAreaView style={styles.fondo} >
        <StatusBar backgroundColor={styles.fondo.backgroundColor} barStyle='dark-content' />
   
        <Tabs />
        {/* <DetallesRcetaScreen nombre={desayunos[0].nombre} ingredientes={desayunos[0].ingredientes} pasos={desayunos[0].pasos} tipo={desayunos[0].tipo} /> */}
        {/* <StackNavigation /> */}
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
