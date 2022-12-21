// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanSplash from './pages/HalamanSplash';
import HalamanLogin from './pages/HalamanLogin';
import HalamanRegister from './pages/HalamanRegister';
import HalamanHome from './pages/HalamanHome';
import HalamanScanPerebusan from './pages/HalamanScanPerebusan';
import HalamanInputDataPerebusan from './pages/HalamanInputDataPerebusan';
import HalamanAkun from './pages/HalamanAkun';
import HalamanScanPenjemuran from './pages/HalamanScanPenjemuran';
import HalamanInputDataPenjemuran from './pages/HalamanInputDataPenjemuran';
import HalamanScanPencacahan from './pages/HalamanScanPencacahan';
import HalamanInputDataPencacahan from './pages/HalamanInputDataPencacahan';
import HalamanScanDistribusi from './pages/HalamanScanDistribusi';
import HalamanInputDataDistribusi from './pages/HalamanInputDataDistribusi';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HalamanSplash'>
        <Stack.Screen name="HalamanSplash" component={HalamanSplash} options={{headerShown:false}} />
        <Stack.Screen name="HalamanLogin" component={HalamanLogin} options={{headerShown:false}} />
        <Stack.Screen name="HalamanRegister" component={HalamanRegister} options={{headerShown:false}} />
        <Stack.Screen name="HalamanHome" component={HalamanHome} options={{headerShown:false}} />
        <Stack.Screen name="HalamanScanPerebusan" component={HalamanScanPerebusan} options={{headerShown:false}} />
        <Stack.Screen name="HalamanInputDataPerebusan" component={HalamanInputDataPerebusan} options={{headerShown:false}} />
        <Stack.Screen name="HalamanAkun" component={HalamanAkun} options={{headerShown:false}} />
        <Stack.Screen name="HalamanScanPenjemuran" component={HalamanScanPenjemuran} options={{headerShown:false}} />
        <Stack.Screen name="HalamanInputDataPenjemuran" component={HalamanInputDataPenjemuran} options={{headerShown:false}} />
        <Stack.Screen name="HalamanScanPencacahan" component={HalamanScanPencacahan} options={{headerShown:false}} />
        <Stack.Screen name="HalamanInputDataPencacahan" component={HalamanInputDataPencacahan} options={{headerShown:false}} />
        <Stack.Screen name="HalamanScanDistribusi" component={HalamanScanDistribusi} options={{headerShown:false}} />
        <Stack.Screen name="HalamanInputDataDistribusi" component={HalamanInputDataDistribusi} options={{headerShown:false}} />





      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;