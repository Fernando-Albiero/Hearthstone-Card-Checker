import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, } from "react-native";
import { useState } from "react";
import { options } from '../configuration';
import axios from "axios";
import styles from "../Styles/SearchByManaStyle";

export default function SearchByMana(props) {
   const opt = JSON.parse(JSON.stringify(options));
   const { navigation, language } = props;
   const [cards, setCards] = useState([]);
   const [selected, setSelected] = useState(undefined);
   const [disabled, setDisabled] = useState(false);
   const [loading, setLoading] = useState(false);
   
   //Object with mana costs images selected and unselected.
   const costs = [
      { id: 0, uri: [require("../assets/0-unselected.png"), require("../assets/0-selected.png")]},
      { id: 1, uri: [require("../assets/1-unselected.png"), require("../assets/1-selected.png")]},
      { id: 2, uri: [require("../assets/2-unselected.png"), require("../assets/2-selected.png")]},
      { id: 3, uri: [require("../assets/3-unselected.png"), require("../assets/3-selected.png")]},
      { id: 4, uri: [require("../assets/4-unselected.png"), require("../assets/4-selected.png")]},
      { id: 5, uri: [require("../assets/5-unselected.png"), require("../assets/5-selected.png")]},
      { id: 6, uri: [require("../assets/6-unselected.png"), require("../assets/6-selected.png")]},
      { id: 7, uri: [require("../assets/7-unselected.png"), require("../assets/7-selected.png")]},
      { id: 8, uri: [require("../assets/8-unselected.png"), require("../assets/8-selected.png")]},
      { id: 9, uri: [require("../assets/9-unselected.png"), require("../assets/9-selected.png")]},
      { id: 10, uri: [require("../assets/10-unselected.png"), require("../assets/10-selected.png")]}
  ];

   //Function to handle with api request. Currently works only with cards between mana cost 1-10. I know there is cards higher.
   const requestMana = async (item) => {
      setDisabled(true);
      setLoading(true);
    
      try {
         //Do the request to hearthstone API.
         const response = await axios.request(`https://hearthstone-card-checker-back-ba8f1169b98d.herokuapp.com/searchByMana/${item.id}`, {
            params: {
               locale: language.id,
            },
         });

         const { cards } = response.data;

         if(cards)
            setCards(cards);

      } catch (error) {
         alert(error);
      };

      setLoading(false);
      setDisabled(false);
   }

   //Function to handle click on cards.
   const handleCards = (item) => {
      return (
         <TouchableOpacity 
            style={styles.cardConteiner} 
            onPress={ () => navigation.navigate('CardInformation', {cardName: item.name, language: language})  }>
            <Image
               style={ styles.cardImage }
               source={{ uri: item.img }}
            />
         </TouchableOpacity>
      );
   };

   //Function to handle with click on mana cost images.
   const handleCosts = (item) => {
      var image = selected == item.id ? item.uri[1] : item.uri[0];

      return (
         <TouchableOpacity
            key={ item.id }
            style={{ marginRight: 5}}
            disabled={ disabled }
            onPress={ () => {
               setSelected(item.id);
               requestMana(item);
            }}>
            <Image
               source={ image }
               style={ styles.costImage }
            />
         </TouchableOpacity>
      );
   };

   return (
      <View style={ styles.container }>
         <Text style={ styles.manaCostText }>{language.SBMTitle}</Text>
         <View style={ styles.costsList }>
            {  costs.map((item) => handleCosts(item)) }
         </View>
         {
            loading ? (
               <View style={styles.loading}>
                  <Text style={ styles.loadingMessage}>{language.SBMLoadingText}</Text>
                  <Text style={ styles.loadingSubMessage}>{language.SBMSubLoadingText}</Text>
                  <ActivityIndicator size={40} color="black"></ActivityIndicator>
               </View>
            ) : (
               <FlatList
                  style={styles.cardList}
                  data={cards}
                  renderItem={({ item }) => handleCards(item) }
               />
            )
         }
      </View>
   );
}
