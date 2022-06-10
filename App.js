import React from 'react';
import {SafeAreaView, LogBox} from 'react-native';
import Navigator from './src/navigations'

const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <SafeAreaView style={{flex:1}}>
      <Navigator/>
    </SafeAreaView>
  );
};
export default App;
