import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native'
import axios from 'axios';

export default function CardInformation({navigation, route}) {
   const {cardName, opt} = route.params;

   const [loading, setLoading] = useState(false);
   const [flavor, setFlavor] = useState('');
   const [text, setText] = useState('');
   const [type, setType] = useState('');
   const [rarity, setRarity] = useState('');
   const [cardSet, setCardSet] = useState('');
   const [cardClass, setCardClass] = useState('');
   const [artist, setArtist] = useState('');
   const [uri, setUri] = useState('https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg');

   useEffect(() => {
      fetchData();
   }, [cardName]);

   async function fetchData(){
      setLoading(true);

      try{
         const response = await axios.request(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`, opt);
         const data = response.data;
         setFlavor(data[0].flavor);
         setText(data[0].text);
         setType(data[0].type);
         setRarity(data[0].rarity);
         setCardSet(data[0].cardSet);
         setCardClass(data[0].playerClass);
         setArtist(data[0].artist);

         if(data[0].hasOwnProperty('img')){
            setUri(data[0].img);
         }
      }
      catch(error){
         alert(error);
      }

      setLoading(false);
   }

  return (
    <View>
      {
         loading ? (
            <View>
               <ActivityIndicator size={25} color='black'/>
            </View>
         ) :
         (
            <View>
               <Text>{cardName}</Text>
               <Text>{flavor}</Text>
               <Text>{text}</Text>
               <Text>Type: {type}</Text>
               <Text>Rarity: {rarity}</Text>
               <Text>Set: {cardSet}</Text>
               <Text>Class: {cardClass}</Text>
               <Text>Artist: {artist}</Text>
               <Image
                  style={{ width: '30%', height: '30%' }}
                  source={{ uri: uri }}
                  resizeMode="contain"
               />
            </View>
         )
      }
    </View>
  )
}