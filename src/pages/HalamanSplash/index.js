// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanSplash({navigation}) {

  setTimeout(()=>{
    navigation.navigate('HalamanLogin');
  },1500)

  return (
    <View style={{ flex: 1, backgroundColor:colors.white }}>

<ScrollView>

<View  style={{ padding:10,  marginTop:200, alignItems:'center'}}>
    <Image    style={{width:250, height:190}}  source={require('../../assets/img/mezidalogo.png')} />
</View>

</ScrollView>

<View  style={{padding:10, marginTop:250}}>
   <Text   style={{color:colors.primary, fontSize:15, fontFamily:'Alata-Regular', textAlign:'center'}}>CV. Madizatex</Text>
</View>




<View  style={{padding:10, bottom:20  }}>
   <Text   style={{color:colors.primary, fontSize:12, fontFamily:'Alata-Regular', textAlign:'center'}}>Pekalongan, Jawa Tengah, Indonesia</Text>
</View>


    </View>
  );
}


export default HalamanSplash;