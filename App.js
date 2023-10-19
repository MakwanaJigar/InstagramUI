// import { View } from 'react-native'
import React from 'react'
import Topbar from './src/Components/Tobpbar'
import Story from './src/Components/Story'
// import Feed from './src/Components/Feed'
// import Footer from './src/Components/Footer'
import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Footer from './src/Components/Footer';
import Chat from './src/Components/Chat';
import Profile from './src/Components/Profile';

const Stack = createNativeStackNavigator();
const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Topbar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Story"
          component={Story}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Chat"
          component={Chat}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>

    // <View>
    //   <Tobpbar />
    //   <Story />
    //   <Feed />
    //   <Footer />
    // </View>
  )
}

export default App