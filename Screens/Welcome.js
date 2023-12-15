import { TouchableHighlight, View, Text, Image, Linking } from "react-native";
import { useFonts } from 'expo-font';
import styles from "./WelcomeStyle";

let customFonts = {
   'Uncial-Caps': require('../assets/fonts/LHF-Uncial-Caps-Regular.ttf'),
   'IBMPlexMono' : require('../assets/fonts/IBMPlexMono-Regular.ttf')
 };
 

export default function Welcome({navigation}) {
   const [isLoaded] = useFonts(customFonts);

   if(isLoaded){
      return (
         <View style={ styles.container }>
            <Text style={ styles.welcome }>Welcome to</Text>
            <Text style={ styles.title }>Hearth Stone{'\n'}Card Checker</Text>
            <Text style={ styles.text }>
               This app was made to allow{'\n'}people to search for{'\n'} Hearthstone’s game cards{'\n'} 
               information based on several{'\n'}data like card name, deck name{'\n'} or star power.{'\n'}
            </Text>
            <Text style={ styles.text }>
               This app uses the HearthStone {'\n'}API available on:{'\n'} 
               <Text 
                  style={ styles.link}
                  onPress={()=>{Linking.openURL('https://hearthstoneapi.com/')}}
               >https://hearthstoneapi.com/</Text>
            </Text>
            
            <TouchableHighlight style={ styles.button } onPress={ () => navigation.navigate('SearchByName') }>
               <Text style={ styles.buttonText }>Start</Text>
            </TouchableHighlight>
            <Text style={ styles.credits }>
               Developed and designed{'\n'}by Fernando Albiero
            </Text>
            <View style={ styles.socialMediaConteiner }>
               <TouchableHighlight 
                  underlayColor='#fff'
                  activeOpacity={0.5}
                  onPress={ () => navigation.navigate('SearchByName') }>
                  <Image 
                     source={ require('../assets/github.png')} 
                     style={ styles.socialMediaImage}>
                  </Image>
               </TouchableHighlight>
               <TouchableHighlight 
                  underlayColor='#fff'
                  activeOpacity={0.5}
                  onPress={ () => navigation.navigate('SearchByName') }>
                  <Image 
                     source={ require('../assets/linkedin.png')} 
                     style={ styles.socialMediaImage}>
                  </Image>
               </TouchableHighlight>
            </View>
         </View>
      )   
   }
}