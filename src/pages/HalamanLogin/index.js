// In App.js in a new project

import * as React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors/colors';
import { SafeAreaView } from 'react-native-safe-area-context';

function HalamanLogin({navigation}) {
  return (
    <View style={{ flex: 1, backgroundColor:colors.primary,  }}>






<SafeAreaView>
<ScrollView>
<View  style={{padding:10, marginTop:100  }}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:35, textAlign:'center'}} >Login</Text>
</View>



<View  style={{ padding:10, margin:10}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >ID</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular', }}  placeholder='Masukan ID'  placeholderTextColor='gray'/>



<View  style={{padding:10, margin:10}}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15,}} >Password</Text>
</View>

<TextInput style={{margin:10, backgroundColor:colors.white, borderWidth:1, borderRadius:10, borderColor:colors.tertiary, color:colors.black, fontFamily:'Alata-Regular', paddingLeft:10}}  placeholder='Masukan Password'  placeholderTextColor='gray'  secureTextEntry={true}/>


<View style={{ padding:10,  margin:20 }} >
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')}  style={{padding:10, backgroundColor:colors.tertiary, borderRadius:10,}} >
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:15, textAlign:'center' }}  >Login</Text>
</TouchableOpacity>
</View>


<View style={{padding:10,}} >
<TouchableOpacity  onPress={()=>navigation.navigate('HalamanRegister')}>
    <Text style={{color:colors.white, fontFamily:'Alata-Regular', fontSize:10, textAlign:'center' }}  >Register</Text>
</TouchableOpacity>
</View>






<View  style={{  padding:10, marginTop:80 }}>
   <Text   style={{color:colors.white, fontSize:15, fontFamily:'Alata-Regular', textAlign:'center'}}>CV. Madizatex</Text>
   <Text style={{color:colors.white, fontSize:12, fontFamily:'Alata-Regular', textAlign:'center'}}>Pekalongan, Jawa Tengah, Indonesia</Text>
</View>


</ScrollView>
</SafeAreaView>
    </View>
  );
}


export default HalamanLogin;