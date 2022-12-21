// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';

function HalamanRegister({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>








<SafeAreaView>
<ScrollView>
<View  style={{marginTop:10, padding:10}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >ID</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular', }}  placeholder='Masukan ID'  placeholderTextColor='gray'/>



<View  style={{padding:10}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >Nama Lengkap</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular',}}  placeholder='Masukan Nama Lengkap'  placeholderTextColor='gray' />



<View  style={{padding:10}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >E-mail</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular', }}  placeholder='Masukan E-mail'  placeholderTextColor='gray' />




<View  style={{padding:10}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >Telp</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular', }}  placeholder='Masukan No Telp'  placeholderTextColor='gray'  />




<View  style={{padding:10}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >Alamat</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular',}}  placeholder='Masukan Alamat'  placeholderTextColor='gray' />




<View  style={{padding:10,}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >Password</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular', }}  placeholder='Masukan Password'  placeholderTextColor='gray'  secureTextEntry={true}/>


<View style={{ padding:10, }} >
<TouchableOpacity  style={{padding:10, backgroundColor:colors.tertiary, borderRadius:10, }} >
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center' }}>Register</Text>
</TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>

    </View>
    
  );
}


export default HalamanRegister;