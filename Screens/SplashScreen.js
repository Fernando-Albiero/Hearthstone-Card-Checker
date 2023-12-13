import { View, Image } from 'react-native';
import React from 'react';

export default function SplashScreen() {
   return (
      <View style={{ flex: 1 }}>
         <Image
            source={require('../assets/splash.png')}
            resizeMode="contain"
         ></Image>
      </View>
   );
}
