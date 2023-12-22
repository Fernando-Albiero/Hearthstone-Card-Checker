import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import styles from '../Styles/CardInformationStyle';
import { options } from '../configuration';

export default function CardInformation({route, navigation}) {
   const {cardName, language} = route.params;
   const [loading, setLoading] = useState(true);
   const [card, setCard] = useState(null);
   
   useEffect(() => {
      fetchData();
   }, [route.params]);

   //Function to get data from HearthStone API.
   async function fetchData(){
      setLoading(true);

      try {
         //Do the request.
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
            if(!card.hasOwnProperty('text')){
               card.text = 'This card doesn\'t contain a text';
            }
            setCard(card);
         }
      }
      catch(error){
         alert(error);
      }
      
      setLoading(false);
   }

   //Function to clear card text returned by API.
   function clearText(txt){
      if(txt.length > 0){
         var clearedText = txt.replace(/\<b\>|\<\/b\>|\<i\>|\<\/i\>|\[x\]|\$|/g, '');
         clearedText = clearedText.replace(/\\n|_/g, ' ');
         clearedText = clearedText.replace('@', '0');
      }

      return clearedText;
   }

   return (
      <View 
         style={ styles.container }>
         {
            loading ? (
               <View style={ styles.loading }>
                  <ActivityIndicator size={40} color='black'/>
               </View>
            ) :
            (
               <View style={ styles.innerContainer }>
                  <ScrollView style={ styles.scroll }>
                     <Text style={ styles.cardName }>{card.name}</Text>
                     <Text style={ styles.cardFlavor }>{'\''}{card.flavor}{'\''}</Text>
                     <Text style={ styles.cardText }>{ clearText(card.text) }</Text>
                     <Text style={ styles.titles }>{language.CIType}
                        <Text style={ styles.information }>{card.type}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CIRarity}
                        <Text style={ styles.information }>{card.rarity}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CISet}
                        <Text style={ styles.information }>{card.cardSet}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CIClass}
                        <Text style={ styles.information }>{card.playerClass}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CIArtist}
                        <Text style={ styles.information }>{card.artist}</Text>
                     </Text>
                  
                     <TouchableOpacity 
                        style={ styles.imageConteiner}
                        onPress={ () => navigation.goBack() }>
                        <Image
                           style={ styles.cardImage }
                           source={{ uri: card.img }}
                        />
                     </TouchableOpacity>
                  </ScrollView>
                  <Text style={ styles.back }>{language.CIBack}<Text style={{ fontWeight: 'bold' }}>{language.CIBackBold}</Text></Text>
               </View>
            )
         }
      </View>
   )  
}