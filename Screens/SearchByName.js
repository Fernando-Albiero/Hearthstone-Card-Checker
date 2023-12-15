import {
   View,
   Image,
   TextInput,
   Text,
   ActivityIndicator,
   TouchableHighlight,
} from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import styles from './SearchByNameStyle';

export default function SearchByName() {
   const [cardName, setCardName] = useState('');
   const [loading, setLoading] = useState(false);
   const [uri, setUri] = useState(
      'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
   );
   
   //Request configuration.
   var options = {
      method: 'GET',
      params: { collectible: '1' },
      responseType: 'json',
      headers: {
         'X-RapidAPI-Key': '81935cf82dmsh5cbfb766a872ce7p16553cjsnec4be953734c',
         'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
   };

   //Function to handle with searches.
   const handleSearch = async () => {
      //Starts loading.
      setLoading(true);

      setUri('https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg');

      //Verify card name.
      if (cardName != '') {
         try {
            //Do the request to hearthstone API.
            const response = await axios.request(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`, options);
            const data = response.data;
            var imagesUri = [];

            //Extract all images found.
            for(let i=0; i<data.length; i++){
               if(data[i].hasOwnProperty('img')){
                  imagesUri.push(data[i].img);
               }
            }

            //If card has a image, shows the first one.
            if(imagesUri.length > 0){
               setUri(imagesUri[0])
            }
            else{
               alert('This card doesn\'t have a image available');
            }
         }
         catch(error){
            alert('Card not find!\nDid u type the card name correctly?');
         }
      } 
      else{
         alert('Please, type a card name!');
      }

      setLoading(false);
   }

   return (
      <View style={ styles.container }>
         {loading ? (
            <View style={ styles.cardConteiner }>
               <ActivityIndicator size={40} color="black" />
            </View>
         ) : (
            <View style={ styles.cardConteiner }>
               <Image
                  style={{ width: '80%', height: '80%' }}
                  source={{ uri: uri }}
                  resizeMode="contain"
               />
            </View>
         )}

         <TextInput
            style={ styles.input }
            onChangeText={(name) => setCardName(name.toUpperCase())}
            placeholder='Type a card name'
         />
        <TouchableHighlight style={ styles.button } onPress={handleSearch}>
            <Text style={ styles.buttonText }>Search</Text>
        </TouchableHighlight>
      </View>
   );
}
