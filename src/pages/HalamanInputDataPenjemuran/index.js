// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import SelectDropdown from 'react-native-select-dropdown'

function HalamanInputDataPenjemuran({navigation}) {

    const countries = ["JNT", "JNE", "SiCepat", "POS Indonesia", "Wahana", "Tiki", "Paxel"]

  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>

<View   style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>

<View>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanScanPenjemuran')}>
    <Image  style={{width:35, height:35}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>


<View style={{bottom:20}}>
    <Text  style={{color:colors.tertiary, fontFamily:'Alata-Regular', fontSize:25, textAlign:'center'}} >Penjemuran</Text>
</View>

</View>

<ScrollView>

<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Tanggal Otomatis' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Jenis' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Kuantitas' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Keterangan' placeholderTextColor='gray' />



<View style={{padding:10, alignItems:'center'}} > 


<TouchableOpacity style={{width:198, backgroundColor:colors.tertiary, padding:10, height:42, borderRadius:10}} >
<Text  style={{color:colors.white, textAlign:'center', fontFamily:'Alata-Regular'}} >Input Data</Text>
</TouchableOpacity>


</View>



</ScrollView>


<View style={{padding:2, backgroundColor:colors.primary,}} ></View>

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


export default HalamanInputDataPenjemuran;