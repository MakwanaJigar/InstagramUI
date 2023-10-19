import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Footer = () => {
  const navigation = useNavigation();

  return (
    <View style={{bottom:0,backgroundColor:'white',height:50,flexDirection:'row',justifyContent:'space-around',alignItems:"center",}}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image 
        source={require('../Assets/Home.png')}
        style={{width:30,height:30}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
        source={require('../Assets/Search.png')}
        style={{width:40,height:30}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
        source={require('../Assets/Add.png')}
        style={{width:30,height:30}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image 
        source={require('../Assets/Reels.png')}
        style={{width:30,height:30}}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Image 
        source={require('../Assets/Profile.png')}
        style={{width:30,height:30}}
        />
      </TouchableOpacity>

    </View>
  )
}

export default Footer