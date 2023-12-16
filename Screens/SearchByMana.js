import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View, } from "react-native";
import { useState } from "react";
import { useFonts } from "expo-font";
import axios from "axios";
import styles from "../Styles/SearchByManaStyle";

let customFonts = {
  'IBMPlexMono': require("../assets/fonts/IBMPlexMono-Regular.ttf"),
  'IBMPlexMono-Bold': require("../assets/fonts/IBMPlexMono-Bold.ttf"),
};

export default function SearchByMana() {
   const [loading, setLoading] = useState(false);
   const [isFontLoaded] = useFonts(customFonts);
   const [selected, setSelected] = useState(undefined);
   const [cardsUri, setCardsUri] = useState([]);

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

    const options = {
      method: "GET",
      params: {
        cost: item.id,
        collectible: "1",
      },
      headers: {
        "X-RapidAPI-Key": "81935cf82dmsh5cbfb766a872ce7p16553cjsnec4be953734c",
        "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
      },
    };

    try {
      //Do the request to hearthstone API.
      const response = await axios.request(
        "https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Death%20Knight",
        options
      );
      const data = response.data;

      var imagesUri = [];

      //Extract all images found.
      for (let i = 0; i < data.length; i++) {
        if (data[i].hasOwnProperty("img")) {
          imagesUri.push(data[i].img);
        }
      }

      setCardsUri(imagesUri);
    } catch (error) {
      alert(error);
    }

    setLoading(false);
  };

  const handleCards = (item) => {
    return (
      <TouchableOpacity style={styles.cardConteiner} onPress={() => {}}>
        <Image
          style={{ width: 250, height: 250, resizeMode: "contain" }}
          source={{ uri: item }}
        />
      </TouchableOpacity>
    );
  };

  if (isFontLoaded) {
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
                     <ActivityIndicator size={40} color="black"></ActivityIndicator>
                  </View>
               ) : (
                  <FlatList
                     style={styles.cardList}
                     data={cardsUri}
                     renderItem={({ item }) => handleCards(item)}
                  />
               )
            }
         </View>
      );
   }
}
