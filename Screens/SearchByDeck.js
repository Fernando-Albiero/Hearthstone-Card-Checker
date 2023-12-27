import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { useState } from 'react';
import { decksEn } from '../configuration';
import axios from 'axios';
import styles from '../Styles/SearchByDeckStyle';

export default function SearchByDeck(props) {
   const { navigation, language } = props;
   const [loading, setLoading] = useState(false);
   const [cardInformation, setCardInformation] = useState([]);

   //Function to handle with API request by deck name.
   async function requestDeck(deckName){
      //Start loading.
      setLoading(true);

      try {
         //Do the request to hearthstone API.
         const response = await axios.request(`https://hearthstone-card-checker-back-ba8f1169b98d.herokuapp.com/searchByDeck/${deckName}`, {
            params: {
               locale: language.id
            },
         });

         const { cards } = response.data;
         
         if(cards)
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
            onPress={ () => navigation.navigate('CardInformation', {cardName: item.name, language: language}) }>
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
         <Text style={ styles.deckName }>{ language.SBDTitle}</Text>
         <SelectList
            boxStyles={ styles.selectList }
            dropdownStyles={ styles.dropdownMenu }
            placeholder={ language.SBDPlaceholder }
            searchPlaceholder={ language.SBDSearchPlaceholder }
            fontFamily='IBMPlexMono'
            setSelected={ (deckName) => requestDeck(deckName) } 
            data={ decksEn } 
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