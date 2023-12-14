import { TouchableHighlight, View, Text, Image } from "react-native";
import styles from "./WelcomeStyle";

export default function Welcome({navigation}) {
   return (
   <View style={ styles.container }>
      <Text style={ styles.welcome }>Welcome to</Text>
      <Text style={ styles.title }>Hearth Stone{'\n'}Card Checker</Text>
      <Text style={ styles.text }>
         This app was made to allow{'\n'}people to search for{'\n'} Hearthstone’s game cards{'\n'} 
         information based on several{'\n'}data like card name, deck name{'\n'} or star power.{'\n'}
      </Text>
      <Text style={ styles.text }>
         This app uses the HearthStone API{'\n'}available on:{'\n'} 
         https://hearthstoneapi.com/
      </Text>
      <TouchableHighlight style={ styles.button } onPress={ () => navigation.navigate('SearchByName') }>
         <Text style={ styles.buttonText }>Start</Text>
      </TouchableHighlight>
      <Text style={ styles.credits }>
         Developed and designed{'\n'}by Fernando Albiero
      </Text>
      <View style={ styles.socialMediaConteiner }>
         <TouchableHighlight onPress={ () => navigation.navigate('SearchByName') }>
            <Image 
               source={ require('../assets/github.png')} 
               style={ styles.socialMediaImage}>
            </Image>
         </TouchableHighlight>
         <TouchableHighlight onPress={ () => navigation.navigate('SearchByName') }>
            <Image 
               source={ require('../assets/linkedin.png')} 
               style={ styles.socialMediaImage}>
            </Image>
         </TouchableHighlight>
      </View>
   </View>
  )
}