import {
   View,
   Image,
   TextInput,
   Button,
   ActivityIndicator,
} from 'react-native';
import { useState } from 'react';
import axios from 'axios';

export default function SearchByName() {
   const [cardName, setCardName] = useState('');
   const [loading, setLoading] = useState(false);
   const [uri, setUri] = useState(
      'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
   );

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
               setUri('https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg')
            }
         }
         catch(error){
            alert('Card not find!\nDid u type the card name correctly?');
            setUri('https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg')
         }
      } 
      else{
         alert('Please, type a card name!')
      }

      setLoading(false);
   }

   return (
      <View style={{ flex: 1, alignItems: 'center' }}>
         {loading ? (
            <ActivityIndicator size={30} color="black" />
         ) : (
            <Image
               style={{ width: '90%', height: '80%' }}
               source={{ uri: uri }}
               resizeMode="contain"
            />
         )}

         <TextInput
            style={{ borderWidth: 1, width: 300, marginBottom: 20 }}
            onChangeText={(name) => setCardName(name.toUpperCase())}
         />
         <View style={{ width: 150 }}>
            <Button title="Search" color={'black'} onPress={handleSearch} />
         </View>
      </View>
   );
}
