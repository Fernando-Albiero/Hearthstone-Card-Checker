import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import styles from '../Styles/CardInformationStyle';
import { options } from '../RequestOptionsAndDecks';

export default function CardInformation({navigation, route}) {
   const [loading, setLoading] = useState(true);
   const {cardName} = route.params;
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
         if(txt.includes('<b>'))
            txt = txt.replace(/[<b></b>]/g, ''); //Remove <b></b> tags.
         if(txt.includes('\\n'))
            txt = txt.replace(/\\n/g, ' '); //Replace \n for blank space.
         if(txt.includes('_'))
            txt = txt.replace(/_/g, ' '); //Replace _ for blank space.
         if(txt.includes('[x]'))
            txt = txt.replace(/\[x\]/g, ''); //Remover [x] marks.
         if(txt.includes('$'))
            txt = txt.replace(/\$/g, ''); //Remover [x] marks.
      }

      return txt;
   }

   return (
      <ImageBackground 
         style={ styles.container }
         imageStyle= {{ resizeMode: 'stretch' }}
         source={ require('../assets/background.png') }>
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
                     <Text style={ styles.cardText }>{   clearText(card.text) }</Text>
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
                  
                     <TouchableOpacity 
                        style={ styles.imageConteiner}
                        onPress={ () => navigation.goBack() }>
                        <Image
                           style={ styles.cardImage }
                           source={{ uri: card.img }}
                        />
                     </TouchableOpacity>
                  </ScrollView>
                  <Text style={ styles.back }>Tap on card to <Text style={{ fontWeight: 'bold' }}>back!</Text></Text>
               </View>
            )
         }
      </ImageBackground>
   )  
}