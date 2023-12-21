import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';
import axios from 'axios';
import styles from '../Styles/SearchByDeckStyle';
import { options } from '../RequestOptionsAndDecks';
import { decks } from '../RequestOptionsAndDecks';

export default function SearchByDeck({navigation}) {
   const [loading, setLoading] = useState(false);
   const [cardInformation, setCardInformation] = useState([]);

   //Function to handle with API request by deck name.
   async function requestAPI(deckName){
      //Start loading.
      setLoading(true);

      try {
         //Do the request to hearthstone API.
         const response = await axios.request(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/sets/${deckName}`, options);
         const data = response.data;
         var cards = []

         //Extract all images found.
         for(let i=0; i<data.length; i++){
            if(data[i].hasOwnProperty('img')){
               cards.push(data[i]);
            }
         }

         setCardInformation(cards);
      }
      catch(error){
         alert(error);
      }

      //Stop loading.
      setLoading(false);
   }

   //Function to show each card.
   const showCards = (item) => {
      return (
         <TouchableOpacity 
            style={ styles.cardConteiner }
            onPress={ () => navigation.navigate('CardInformation', {cardName: item.name}) }>
            <Image
               style={ styles.cardImage }
               source={{ uri: item.img }}
               resizeMode="contain"
            />
         </TouchableOpacity>
      );
   }

   return (
      <View 
         style={ styles.container }>
         <Text style={ styles.deckName }>Search by Deck</Text>
         <SelectList
            boxStyles={ styles.selectList }
            dropdownStyles={ styles.dropdownMenu }
            placeholder='Select a deck'
            searchPlaceholder='Search'
            fontFamily='IBMPlexMono'
            setSelected={ (deckName) => requestAPI(deckName) } 
            data={ decks } 
            save="value"
         />
         {
            loading ? 
               <View style={ styles.loading }>
                  <ActivityIndicator size={ 40 } color='black'></ActivityIndicator>
               </View>
            :
               <FlatList
                  style={ styles.list }
                  data={ cardInformation }
                  renderItem={ ({item}) => showCards(item) }
               />
         }
      </View>
   )
}