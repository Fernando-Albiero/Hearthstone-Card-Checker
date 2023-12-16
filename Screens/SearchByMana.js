import { View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from '../Styles/SearchByManaStyle';
import { useState } from 'react';
import axios from 'axios';

export default function SearchByMana() {
   const [selected, setSelected] = useState(undefined);
   const [loading, setLoading] = useState(false);
   const [cardsUri, setCardsUri] = useState([]);

   const costs = [
      {id:0, uri: [require('../assets/0Unselected.png'), require('../assets/0Selected.png')]},
      {id:1, uri: [require('../assets/1Unselected.png'), require('../assets/1Selected.png')]},
      {id:2, uri: [require('../assets/2Unselected.png'), require('../assets/2Selected.png')]},
      {id:3, uri: [require('../assets/3Unselected.png'), require('../assets/3Selected.png')]},
      {id:4, uri: [require('../assets/4Unselected.png'), require('../assets/4Selected.png')]},
      {id:5, uri: [require('../assets/5Unselected.png'), require('../assets/5Selected.png')]},
      {id:6, uri: [require('../assets/6Unselected.png'), require('../assets/6Selected.png')]},
      {id:7, uri: [require('../assets/7Unselected.png'), require('../assets/7Selected.png')]},
      {id:8, uri: [require('../assets/8Unselected.png'), require('../assets/8Selected.png')]},
      {id:9, uri: [require('../assets/9Unselected.png'), require('../assets/9Selected.png')]},
      {id:10, uri: [require('../assets/10Unselected.png'), require('../assets/10Selected.png')]},
   ];

   const handleCosts = (item) => {
      var image = selected == item.id ? item.uri[1] : item.uri[0];

      if(item.id == 10){
         return (
            <TouchableOpacity onPress={ () =>{
               setSelected(item.id); 
               handleSearch(item)
            } }>
               <Image 
                  source={image}
                  style={{width: 50, height:30, resizeMode: 'contain'}}>
               </Image>
            </TouchableOpacity>
         )
      }
      else{
         return (
            <TouchableOpacity onPress={ () =>{
               setSelected(item.id); 
               handleSearch(item)
            } }>
               <Image 
                  source={image}
                  style={{width: 30, height:30, resizeMode: 'contain'}}>
               </Image>
            </TouchableOpacity>
         )
      }
   }

   const handleSearch = async (item) => {
      setLoading(true);
      
      const options = {
         method: 'GET',
         params: {
            cost: item.id,
            collectible: '1'
         },
         headers: {
           'X-RapidAPI-Key': '81935cf82dmsh5cbfb766a872ce7p16553cjsnec4be953734c',
           'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
         }
       };

       try {
         //Do the request to hearthstone API.
         const response = await axios.request('https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/Death%20Knight', options);
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

      setLoading(false);
   }

   const handleCards = (item) => {
      return (
         <TouchableOpacity 
            onPress={ () => {} }>
            <Image
               style={{ width: 300, height: 300, resizeMode:'contain'}}
               source={{ uri: item }}
            />
         </TouchableOpacity>
      );
   }

   return (
      <View style={ styles.container }>
         
         <FlatList
            style={{backgroundColor: 'green', flexGrow: 0, height: '6%'}}
            horizontal={true}
            data={costs}
            renderItem={({item}) => handleCosts(item)}
         />
         {
            loading ?
            <View style={{ width: '100%', height: '94%', backgroundColor: 'yellow', justifyContent:'center', alignItems: 'center' }}>
               <ActivityIndicator size={40} color='black'></ActivityIndicator>
            </View>
            :
            <FlatList
               style={{ width: '100%', height: '94%', backgroundColor: 'lightblue'}}
               data={cardsUri}
               renderItem={({item}) => handleCards(item)}
            />
         }
      </View>
      )
   }