// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanScanDistribusi({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>

<View   style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>

<View>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} >
    <Image  style={{width:35, height:35}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>


<View style={{bottom:20}}>
    <Text  style={{color:colors.tertiary, fontFamily:'Alata-Regular', fontSize:25, textAlign:'center'}} >Distribusi</Text>
</View>

</View>



<View  style={{padding:10, alignItems:'center', marginTop:50}} >
<Image style={{width:246, height:246}}  source={require('../../assets/img/scanbarcode.png')} />
</View>


<View style={{padding:10}}>
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanInputDataDistribusi')} style={{padding:10, backgroundColor:colors.tertiary, borderRadius:10, margin:20, justifyContent:'center'}}>
    <Text  style={{color:colors.white, fontFamily:'Alata-Regular', textAlign:'center', fontSize:20}} >Hasil Scan</Text>
    </TouchableOpacity>
</View>




<View style={{padding:2, backgroundColor:colors.primary, marginTop:150}} ></View>

<View style={{padding:1, backgroundColor:colors.secondary, flexDirection:'row', justifyContent:'space-around'}}>

<View  style={{padding:10, }} >
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}>
    <Image   style={{width:30, height:30}}  source={require('../../assets/img/home.png')} />
</TouchableOpacity>
</View>


<View  style={{padding:10, }} >
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanAkun')}>
    <Image   style={{width:30, height:30}}  source={require('../../assets/img/profile.png')} />
</TouchableOpacity>
</View>
</View>


    </View>
  );
}


export default HalamanScanDistribusi;