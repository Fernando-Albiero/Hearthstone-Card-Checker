import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ImageBackground } from 'react-native';
import axios from 'axios';
import { useFonts } from 'expo-font';
import styles from '../Styles/CardInformationStyle';
import { options } from '../RequestOptionsAndDecks';

let customFonts = {
   'BelweBoldBT': require('../assets/fonts/BelweBoldBT.ttf'),
   'Inter' : require('../assets/fonts/Inter-Regular.ttf'),
   'Inter-Bold' : require('../assets/fonts/Inter-Bold.ttf')
 };

export default function CardInformation({route}) {
   const [isLoaded] = useFonts(customFonts);
   const [loading, setLoading] = useState(false);
   const {cardName} = route.params;
   const [card, setCard] = useState(null);
   
   useEffect(() => {
      fetchData();
   }, [route.params]);

   async function fetchData(){
      setLoading(true);

      try {
         //Do the request to hearthstone API.
         const response = await axios.request(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`, options);
         const data = response.data;
         var card = null;

         //Extract card information.
         for(let i=0; i<data.length; i++){
            if(data[i].hasOwnProperty('img')){
               card = data[i];
               break;
            }
         }

         if(card != null){
            setCard(card);
         }
      }
      catch(error){
         alert(error);
      }
      
      setLoading(false);
   }

   function clearText(txt){
      if(txt.includes('<b>'))
         txt = txt.replace(/[<b></b>]/g, ''); //Remove <b></b> tags.
      if(txt.includes('\\n'))
         txt = txt.replace(/\\n/g, ' '); //Replace \n for blank space.
      if(txt.includes('_'))
         txt = txt.replace(/_/g, ' '); //Replace _ for blank space.
      if(txt.includes('[x]'))
         txt = txt.replace(/\[x\]/g, ''); //Remover [x] marks.

      return txt;
   }

   if(isLoaded){
      return (
         <ImageBackground 
            style={ styles.container }
            source={ require('../assets/background.png') }>
           {
              loading ? (
                 <View style={ styles.loading }>
                    <ActivityIndicator size={40} color='black'/>
                 </View>
              ) :
              (
                 <View style={ styles.inner }>
                     <Text style={ styles.cardName }>{card.name}</Text>
                     <Text style={ styles.cardFlavor }>{card.flavor}</Text>
                     <Text style={ styles.cardText }>{clearText(card.text)}</Text>
                     <Text style={ styles.titles }>Type:{" "}
                        <Text style={ styles.information }>{card.type}</Text>
                     </Text>
                     <Text style={ styles.titles }>Rarity:{" "}
                        <Text style={ styles.information }>{card.rarity}</Text>
                     </Text>
                     <Text style={ styles.titles }>Set:{" "}
                        <Text style={ styles.information }>{card.cardSet}</Text>
                     </Text>
                     <Text style={ styles.titles }>Class:{" "} 
                        <Text style={ styles.information }>{card.playerClass}</Text>
                     </Text>
                     <Text style={ styles.titles }>Artist:{" "}
                        <Text style={ styles.information }>{card.artist}</Text>
                     </Text>
                     <View style={ styles.imageConteiner}>
                        <Image
                           style={{ width: '50%', height: '80%', marginTop:-30 }}
                           source={{ uri: card.img }}
                           resizeMode="contain"
                        />
                     </View>
                 </View>
              )
           }
         </ImageBackground>
      )  
   }
}