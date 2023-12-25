import { View, Image } from 'react-native';
import { useEffect } from 'react';
import styles from '../Styles/SplashScreenStyle';

export default function SplashScreen({navigation}) {
   useEffect(() => {
      setTimeout(()=> navigation.navigate('Welcome'), 2500);
   }, []);

   return (
      <View style={ styles.container }>
         <Image 
            source={ require('../assets/splash.png') }
            style={ styles.image }
            resizeMode='contain'/>
      </View>
  )
}