import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView, StatusBar
} from 'react-native';
import Tabs from './src/navigator/bottomTabNavigation';
import { styles } from './src/theme/appTheme';


const App = () => {
  return (

    <NavigationContainer>
      <SafeAreaView style={styles.fondo} >
        <StatusBar backgroundColor={styles.fondo.backgroundColor} barStyle='dark-content' />

        <Tabs />
        
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
