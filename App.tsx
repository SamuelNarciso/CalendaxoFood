import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView, StatusBar
} from 'react-native';
import Tabs from './src/navigator/bottomTabNavigation';
import CalendarioScreen from './src/screens/CalendarioScreen';
import PrincipalScreen from './src/screens/PrincipalScreen';
import RecetasScreen from './src/screens/RecetasScreen';
import { styles } from './src/theme/appTheme';
import DetallesRcetaScreen from './src/screens/DetallesRcetaScreen';
import { desayunos } from './src/assets/recetas';


const App = () => {
  const backgroundStyle = {

  };

  

  return (

    <NavigationContainer>
      <SafeAreaView style={styles.fondo} >
        <StatusBar backgroundColor={styles.fondo.backgroundColor} barStyle='dark-content' />
        {/* <PrincipalScreen /> */}
        {/* <RecetasScreen/> */}
        {/* <CalendarioScreen /> */}
        {/* <Tabs /> */}
        <DetallesRcetaScreen nombre={desayunos[0].nombre} ingredientes={desayunos[0].ingredientes} pasos={desayunos[0].pasos} tipo={desayunos[0].tipo} />
      </SafeAreaView>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
};
export default App;
