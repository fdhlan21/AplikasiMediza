// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

function HalamanHome({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>




<ScrollView>


<View style={{padding:10,  backgroundColor:colors.secondary, borderBottomRightRadius:50, borderBottomLeftRadius:50, height:200}} >


<View  style={{ padding:10, top:15, flexDirection:'row', justifyContent:'flex-end'}} >
    <Image  style={{width:73, height:55, }}  source={require('../../assets/img/mezidalogo.png')} />
</View>


<View  style={{padding:10,  bottom:60}}  >
<Text  style={{color:colors.tertiary, fontFamily:'Alata-Regular', fontSize:15,}} >Selamat datang, Afif!</Text>
</View>

<View  style={{padding:10,  bottom:80,}}  >
<Text  style={{color:colors.tertiary, fontFamily:'Alata-Regular', fontSize:35, }} >MadizaTex</Text>
</View>
</View>



  
<View  style={{padding:10, bottom:90,  alignItems:'center'  }} >  
<Image  style={{width:324, height:188, }}  source={require('../../assets/img/slider.png')} />
</View>


<View  style={{ flexDirection:'row', padding:10, bottom:100,  justifyContent:'space-around' }}>

<View  style={{ padding:10,  }}>
    <TouchableOpacity   onPress={()=>navigation.navigate('HalamanScanPerebusan')}  style={{backgroundColor:colors.touch, width:138, height:138, borderRadius:10, borderWidth:1, borderColor:colors.tertiary  }}>
        <Image style={{width:80, height:77, left:25, top:30}} source={require('../../assets/img/perebusan.png')}  />
    </TouchableOpacity>
</View>


<View  style={{  padding:10, marginLeft:20  }}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanScanPenjemuran')}  style={{backgroundColor:colors.touch, width:138, height:138, borderRadius:10, borderWidth:1, borderColor:colors.tertiary  }}>
        <Image style={{width:77, height:87, left:30, top:25}} source={require('../../assets/img/penjemuran.png')}  />
    </TouchableOpacity>
</View>
    
</View>




<View style={{flexDirection:'row' , bottom:120, justifyContent:'space-around' }} >
<View style={{padding:0, }} >
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, }} >Perebusan</Text>
</View>
<View style={{padding:0, }} >
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, }} >Penjemuran</Text>
</View>
</View>



<View  style={{flexDirection:'row', padding:10, bottom:120, justifyContent:'space-around',}}>

<View  style={{  padding:10  }}>
    <TouchableOpacity onPress={()=>navigation.navigate('HalamanScanPencacahan')}  style={{backgroundColor:colors.touch, width:138, height:138, borderRadius:10, borderWidth:1, borderColor:colors.tertiary }}>
        <Image style={{width:73, height:77, left:25, top:30}} source={require('../../assets/img/pencacahan.png')}  />
    </TouchableOpacity>
</View>


<View  style={{padding:10,  marginLeft:20}}>
    <TouchableOpacity  onPress={()=>navigation.navigate('HalamanScanDistribusi')} style={{backgroundColor:colors.touch, width:138, height:138, borderRadius:10,borderWidth:1, borderColor:colors.tertiary  }}>
        <Image style={{width:77, height:77, left:30, top:25}} source={require('../../assets/img/distribusi.png')}  />
    </TouchableOpacity>
</View>
</View>


<View style={{flexDirection:'row' ,  bottom:140,   justifyContent:'space-around'}} >
<View style={{padding:0, }} >
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >Pencacahan</Text>
</View>
<View style={{padding:0, }} >
<Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, }} >Distribusi</Text>
</View>
</View>
</ScrollView>


<View style={{padding:1, backgroundColor:colors.tertiary}} ></View>

<View style={{padding:1, backgroundColor:colors.secondary, flexDirection:'row', justifyContent:'space-around'}}>

<View  style={{padding:10, }} >
<TouchableOpacity>
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


export default HalamanHome;