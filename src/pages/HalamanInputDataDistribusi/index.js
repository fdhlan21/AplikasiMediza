// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import SelectDropdown from 'react-native-select-dropdown'

function HalamanDataInputDistribusi({navigation}) {

    const countries = ["JNT", "JNE", "SiCepat", "POS Indonesia", "Wahana", "Tiki", "Paxel"]

  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>

<View   style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>

<View>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanScanDistribusi')}>
    <Image  style={{width:35, height:35}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>


<View style={{bottom:20}}>
    <Text  style={{color:colors.tertiary, fontFamily:'Alata-Regular', fontSize:25, textAlign:'center'}} >Distribusi</Text>
</View>

</View>

<ScrollView>

<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Tanggal Otomatis' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Macam' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Jenis' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Kuantitas' placeholderTextColor='gray' />
<View  style={{backgroundColor:colors.white, borderRadius:10,  fontFamily:'Alata-Regular', padding:10, margin:10}}>

<View  style={{right:10,}}>

<SelectDropdown    data={countries} onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}  buttonTextStyle={{color:'gray', fontFamily:'Alata-Regular', left:50, fontSize:15}}  buttonStyle={{backgroundColor:colors.white}} defaultButtonText='Ekspedisi'  rowTextStyle={{color:colors.black, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center'}}/>

</View>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', }}   placeholder='Keterangan' placeholderTextColor='gray' />


<View style={{padding:10, alignItems:'center'}} > 


<TouchableOpacity style={{width:198, backgroundColor:colors.tertiary, padding:10, height:42, borderRadius:10}} >
<Text  style={{color:colors.white, textAlign:'center', fontFamily:'Alata-Regular'}} >Input Data</Text>
</TouchableOpacity>


</View>



</ScrollView>



<View style={{padding:1, backgroundColor:colors.tertiary,}} ></View>

<View style={{padding:1, backgroundColor:colors.secondary, flexDirection:'row', justifyContent:'space-around'}}>

<View  style={{padding:10, }} >
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}>
    <Image   style={{width:30, height:30}}  source={require('../../assets/img/home.png')} />
</TouchableOpacity>
</View>


<View  style={{padding:10, }} >
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanAkun')}>
    <Image   style={{width:30, height:30}}  source={require('../../assets/img/profile.png')} />
</TouchableOpacity>
</View>
</View>




    </View>
  );
}


export default HalamanDataInputDistribusi;