import { TouchableHighlight, View, Text, Image, Linking, StatusBar, TouchableOpacity, BackHandler } from "react-native";
import { useEffect, useState } from "react";
import { en, ptBR } from "../Languages/supportedLanguages";
import { options } from "../configuration";
import styles from '../Styles/WelcomeStyle';

export default function Welcome({navigation}) {
   const [language, setLanguage] = useState(ptBR);
   const [opacityBr, setOpacityBr] = useState(1);
   const [opacityEn, setOpacityEn] = useState(0.2);

   useEffect(() =>{
      const backAction = () => {
         return true;
      };

      const unsubscribe = navigation.addListener('beforeRemove', (e) => {
         e.preventDefault();
         backAction();
      })

      return () => {
         unsubscribe();
      };
   }, [navigation]);

   //Function to handle app languages.
   const handleLanguage = (language) => {
      if(language == 'ptBR'){
         setLanguage(ptBR);
         setOpacityBr(1);
         setOpacityEn(0.2);
         options.params.locale = 'ptBR';
      }
      else{
         setLanguage(en);
         setOpacityBr(0.2);
         setOpacityEn(1);
         options.params.locale = 'enUS';
      }
   }

   return (
      <View style={ styles.container }>
         <StatusBar style='light' backgroundColor='black' />
         <View style={ styles.flagsView }>
            <TouchableOpacity
               style={{ opacity: opacityBr }}
               onPress={ () => handleLanguage('ptBR') }>
               <Image
                  source={ require('../assets/brazil-flag.png')}
                  style={ styles.flagBr }/>
            </TouchableOpacity>
            <TouchableOpacity
               style={{ opacity: opacityEn }}
               onPress={ () => handleLanguage(en) }>
               <Image
                  source={ require('../assets/united-states-flag.png')}
                  style={ styles.flagEn }/>
            </TouchableOpacity>
         </View>
         <View style={ styles.textView }>
            <Text 
               style={ styles.welcome }>
               {language.welcome}
            </Text>
            <Text 
               style={ styles.title }>
               {language.welcomeTittle}
            </Text>
            <Text 
               style={ styles.text }>
               {language.welcomeText1}
            </Text>
            <Text 
               style={ styles.text }> 
               {language.welcomeText2}
               <Text 
                  style={ styles.link}
                  onPress={ () => { Linking.openURL('https://hearthstoneapi.com/') }}>
                  {language.welcomeLink}</Text>
            </Text>
            
            <TouchableHighlight 
               style={ styles.button } 
               onPress={ () => navigation.navigate('Swiper', { language: language }) }>
               <Text 
                  style={ styles.buttonText }>
                  {language.welcomeButton}
               </Text>
            </TouchableHighlight>
            <Text 
               style={ styles.credits }>
               { language.welcomeCredits}
            </Text>
            <View style={ styles.socialMediaConteiner }>
               <TouchableHighlight 
                  underlayColor='#fff'
                  activeOpacity={0.5}
                  onPress={() => Linking.openURL('https://github.com/Fernando-Albiero/')}>
                  <Image 
                     source={ require('../assets/github.png')} 
                     style={ styles.socialMediaImage}>
                  </Image>
               </TouchableHighlight>
               <TouchableHighlight 
                  underlayColor='#fff'
                  activeOpacity={0.5}
                  onPress={() => Linking.openURL('https://www.linkedin.com/in/fernando-albiero-8402302a4/')}>
                  <Image 
                     source={ require('../assets/linkedin.png')} 
                     style={ styles.socialMediaImage}>
                  </Image>
               </TouchableHighlight>
            </View>
         </View>
      </View>
   );
}