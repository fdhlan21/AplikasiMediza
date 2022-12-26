// In App.js in a new project

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import Modal from "react-native-modal";



function HalamanAkun({navigation}) {

    const [modal,setModal] = useState(false)



  return (
    <View style={{ flex: 1, backgroundColor:colors.primary }}>

<Modal style={{alignItems:'center'}} isVisible={modal}>
        <View style={{ backgroundColor:colors.white, borderRadius:20, padding:10, width:350, height:200,  }}>
        <View style={{flexDirection:'row', padding:10, justifyContent:'flex-end'}}>
        <TouchableOpacity  style={{ bottom:0,}}   onPress={() => setModal(false)}   ><Image   style={{width:15, height:15,}} source={require('../../assets/img/x.png')} /></TouchableOpacity>
        </View>
        <View style={{padding:10, alignItems:'center', bottom:28}}>
        <Image    style={{width:128, height:128,  }} source={require('../../assets/img/ceklis.png')} />
          <Text  style={{color:colors.tertiary, fontFamily:'Alata-Regular', fontSize:25, textAlign:'center'}}  >Berhasil Disimpan!</Text>
          </View>
        </View>
  
      </Modal>



<View   style={{padding:10, backgroundColor:colors.secondary, borderBottomRightRadius:10, borderBottomLeftRadius:10,}}>

<View>
<TouchableOpacity>
    <Image  style={{width:35, height:35}}  source={require('../../assets/img/back.png')} />
    </TouchableOpacity>
</View>


<View style={{bottom:20}}>
    <Text  style={{color:colors.tertiary, fontFamily:'Alata-Regular', fontSize:25, textAlign:'center'}} >Akun</Text>
</View>

</View>

<ScrollView>

<View style={{padding:10, alignItems:'center'}} >

<TouchableOpacity>
    <Image  style={{width:150, height:150,}}    source={require('../../assets/img/potogantiprofile.png')} />
</TouchableOpacity>

</View>


<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Nama' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='ID' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Username' placeholderTextColor='gray' />
<TextInput style={{margin:10, backgroundColor:colors.white, borderRadius:10, color:colors.black, fontFamily:'Alata-Regular', padding:10}}   placeholder='Password' placeholderTextColor='gray'  secureTextEntry={true}/>



<View style={{padding:10, alignItems:'center'}} > 
<TouchableOpacity     onPress={() => setModal(true)} style={{width:198, backgroundColor:colors.tertiary, padding:10, height:42, borderRadius:10}} >
<Text  style={{color:colors.white, textAlign:'center', fontFamily:'Alata-Regular'}} >Simpan</Text>
</TouchableOpacity>
</View>


<View style={{padding:10, alignItems:'center'}} > 
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanLogin')}   style={{width:198, backgroundColor:colors.danger, padding:10, height:42, borderRadius:10}} >
<Text  style={{color:colors.white, textAlign:'center', fontFamily:'Alata-Regular', }} >Keluar</Text>
</TouchableOpacity>
</View>



</ScrollView>


<View style={{padding:1, backgroundColor:colors.tertiary,  marginTop:0}} ></View>

<View style={{padding:1, backgroundColor:colors.secondary, flexDirection:'row', justifyContent:'space-around'}}>

<View  style={{padding:10,  }} >
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanHome')}>
    <Image   style={{width:30, height:30}}  source={require('../../assets/img/home.png')} />
</TouchableOpacity>
</View>



<View  style={{padding:10, }} >
<TouchableOpacity>
    <Image   style={{width:30, height:30}}  source={require('../../assets/img/profile.png')} />
</TouchableOpacity>
</View>
</View>




    </View>
  );
}


export default HalamanAkun;