import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, } from "react-native";
import { useState } from "react";
import axios from "axios";
import styles from "../Styles/SearchByManaStyle";
import { options } from "../RequestOptionsAndDecks";

var opt = JSON.parse(JSON.stringify(options));

export default function SearchByMana({navigation}) {
   const [loading, setLoading] = useState(false);
   const [selected, setSelected] = useState(undefined);
   const [cards, setCards] = useState([]);
   
   const costs = [
      { id: 0, uri: [require("../assets/0Unselected.png"), require("../assets/0Selected.png")]},
      { id: 1, uri: [require("../assets/1Unselected.png"), require("../assets/1Selected.png")]},
      { id: 2, uri: [require("../assets/2Unselected.png"), require("../assets/2Selected.png")]},
      { id: 3, uri: [require("../assets/3Unselected.png"), require("../assets/3Selected.png")]},
      { id: 4, uri: [require("../assets/4Unselected.png"), require("../assets/4Selected.png")]},
      { id: 5, uri: [require("../assets/5Unselected.png"), require("../assets/5Selected.png")]},
      { id: 6, uri: [require("../assets/6Unselected.png"), require("../assets/6Selected.png")]},
      { id: 7, uri: [require("../assets/7Unselected.png"), require("../assets/7Selected.png")]},
      { id: 8, uri: [require("../assets/8Unselected.png"), require("../assets/8Selected.png")]},
      { id: 9, uri: [require("../assets/9Unselected.png"), require("../assets/9Selected.png")]},
      { id: 10, uri: [require("../assets/10Unselected.png"), require("../assets/10Selected.png")]}
  ];

  const handleCosts = (item) => {
    var image = selected == item.id ? item.uri[1] : item.uri[0];

    if (item.id == 10) {
      return (
        <TouchableOpacity
          onPress={() => {
            setSelected(item.id);
            handleSearch(item);
          }}
        >
          <Image source={image} style={styles.costs}></Image>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          onPress={() => {
            setSelected(item.id);
            handleSearch(item);
          }}
        >
          <Image
            source={image}
            style={{ width: 30, height: 30, resizeMode: "contain" }}
          ></Image>
        </TouchableOpacity>
      );
    }
  };

  const handleSearch = async (item) => {
    setLoading(true);

    opt.params.cost = item.id;

    try {
      //Do the request to hearthstone API.
      const response = await axios.request('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards', opt);
      const data = response.data;

      var cards = [];

      //Get each deck in data.
      for (let deck in data) {
         //Extract deck information
         var array = data[deck];
         
         //Extract images from deck cards.
         for(let i=0; i<array.length; i++){
            if(array[i].hasOwnProperty("img")){
               cards.push(array[i]);
            }
         }
      }

      setCards(cards);

    } catch (error) {
      alert(error);
    }

    setLoading(false);
  };

  const handleCards = (item) => {
    return (
      <TouchableOpacity style={styles.cardConteiner} onPress={() => navigation.navigate('CardInformation', {cardName: item.name})}>
        <Image
          style={{ width: 250, height: 250, resizeMode: "contain" }}
          source={{ uri: item.img }}
        />
      </TouchableOpacity>
    );
  };

   return (
      <View style={styles.container}>
         <Text style={styles.manaCostText}>Mana Cost</Text>
         <FlatList
            style={styles.costsList}
            horizontal={true}
            data={costs}
            renderItem={({ item }) => handleCosts(item)}
         />
         {
            loading ? (
               <View style={styles.loading}>
                  <Text style={ styles.loadingMessage}>This operation can take a while because there are many cards.</Text>
                  <Text style={ styles.loadingSubMessage}>Please wait a moment!</Text>
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
