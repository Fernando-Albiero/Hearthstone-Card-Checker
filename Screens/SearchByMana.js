import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import styles from '../Styles/SearchByManaStyle';
import { useState } from 'react';

export default function SearchByMana() {
   const [selected, setSelected] = useState(undefined);

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
            <TouchableOpacity onPress={ () =>setSelected(item.id) }>
               <Image 
                  source={image}
                  style={{width: 50, height:30, resizeMode: 'contain', backgroundColor: 'green'}}>
               </Image>
            </TouchableOpacity>
         )
      }
      else{
         return (
            <TouchableOpacity onPress={ () => setSelected(item.id) }>
               <Image 
                  source={image}
                  style={{width: 30, height:30, resizeMode: 'contain', backgroundColor: 'green'}}>
               </Image>
            </TouchableOpacity>
         )
      }
   }

   const handleSearch = () => {
      
   }


   return (
      <View style={ styles.container }>
         
         <FlatList
            horizontal={true}
            data={costs}
            renderItem={({item}) => handleCosts(item)}
         />
         {/*<FlatList
            style={ styles.list }
            data={cardsUri}
            renderItem={({item}) => handleCards(item)}
         /> */}
      </View>
      )
   }