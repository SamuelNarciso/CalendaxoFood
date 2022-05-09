import React from 'react';
import {
  SafeAreaView, StatusBar
} from 'react-native';
import PrincipalScreen from './src/screens/PrincipalScreen';
import RecetasScreen from './src/screens/RecetasScreen';
import { styles } from './src/theme/appTheme';


const App = () => {
  const backgroundStyle = {

  };

  return (

    <SafeAreaView style={styles.fondo} >
      <StatusBar backgroundColor={ styles.fondo.backgroundColor  } barStyle='dark-content'/>
      {/* <PrincipalScreen /> */}
      <RecetasScreen/>
    </SafeAreaView>
  );
};
export default App;
