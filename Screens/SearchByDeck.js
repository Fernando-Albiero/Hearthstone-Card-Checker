import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { SelectList } from 'react-native-dropdown-select-list';
import { useFonts } from 'expo-font';
import axios from 'axios';
import styles from './SearchByDeckStyle';

let customFonts = {
   'IBMPlexMono' : require('../assets/fonts/IBMPlexMono-Regular.ttf'),
   'IBMPlexMono-Bold' : require('../assets/fonts/IBMPlexMono-Bold.ttf')
 };

export default function SearchByDeck() {
   const [cardsUri, setCardsUri] = useState([]);
   const [isLoaded] = useFonts(customFonts);
  
   const data = [
      {key:'1', value:'Ashes of Outland'},
      {key:'2', value:'Caverns of Time'},
      {key:'3', value:'Core'},
      {key:'4', value:'Descent of Dragons'},
      {key:'5', value:'Forged in the Barrens'},
      {key:'6', value:'Path of Arthas'},
      {key:'7', value:'United in Stormwind'},
      {key:'8', value:' Saviors of Uldum'},
      {key:'9', value:'TITANS'},
      {key:'10', value:'Voyage to the Sunken City'}
   ];

   //Request configuration.
   const options = {
      method: 'GET',
      params: {collectible: '1'},
      headers: {
        'X-RapidAPI-Key': '81935cf82dmsh5cbfb766a872ce7p16553cjsnec4be953734c',
        'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
      }
    };

   //Function to handle with searches.
   async function handleSearch(deckName){
      try {
         //Do the request to hearthstone API.
         const response = await axios.request(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${deckName}`, options);
         const data = response.data;

         var imagesUri = [];

         //Extract all images found.
         for(let i=0; i<data.length; i++){
            if(data[i].hasOwnProperty('img')){
               imagesUri.push(data[i].img);
            }
         }

         setCardsUri(imagesUri);
      }
      catch(error){
         alert(error);
      } 
   }

   const handlerCards = (item) => {
      return (
         <TouchableOpacity 
            style={ styles.cardConteiner }
            onPress={ () => {} }>
            <Image
               style={{ width: 200, height: 200 }}
               source={{ uri: item }}
               resizeMode="contain"
            />
         </TouchableOpacity>
      );
   }

  return (
    <View style={ styles.container }>
      <Text style={ styles.deckName }>Deck Name</Text>
      <SelectList 
         style={ styles.dropdownMenu }
         setSelected={(deckName) => handleSearch(deckName)} 
         data={data} 
         save="value"
     />

      <FlatList
         style={ styles.list }
         data={cardsUri}
         renderItem={({item}) => handlerCards(item)}
      />
    </View>
  )
}