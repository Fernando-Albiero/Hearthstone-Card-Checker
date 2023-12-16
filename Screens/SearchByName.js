import { ActivityIndicator, Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import styles from '../Styles/SearchByNameStyle';
import { options } from '../RequestOptionsAndDecks';

export default function SearchByName({navigation}) {
   const [cardName, setCardName] = useState('');
   const [uri, setUri] = useState(
      'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
   );
   const [data, setData] = useState({});
   const [loading, setLoading] = useState(false);
   const [request, setRequest] = useState(false);
   
   //Function to handle with searches.
   const handleSearch = async () => {
      //Start loading.
      setLoading(true);
      setUri('https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg');
      setRequest(false);

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
               setUri(imagesUri[0]);
               setData(data);
               setRequest(true);
            }
            else{
               alert('This card doesn\'t have a image available');
            }
         }
         catch(error){
            alert('Card not find!\n\nDid you type the card name correctly?');
         }
      } 
      else{
         alert('Please, type a card name!');
      }

      //Stop loading.
      setLoading(false);
   }

   //Function to handle with click on card.
   const handleCardPress = () => {
      if(request){
         navigation.navigate('CardInformation', {data: data});
      }
   }

   return (
      <View style={ styles.container }>
         {
            loading ? (
               <View style={ styles.cardConteiner }>
                  <ActivityIndicator size={40} color="black" />
               </View>
             ) : 
             (
               <TouchableOpacity 
                  style={ styles.cardConteiner }
                  onPress={ handleCardPress }>
                  <Image
                     style={{ width: '80%', height: '80%' }}
                     source={{ uri: uri }}
                     resizeMode="contain"
                  />
               </TouchableOpacity>
            )
         }
         <TextInput
            style={ styles.input }
            onChangeText={(name) => setCardName(name.toLowerCase())}
            placeholder='Type a card name'
         />
         <TouchableHighlight style={ styles.button } onPress={handleSearch}>
            <Text style={ styles.buttonText }>Search</Text>
         </TouchableHighlight>
      </View>
   );
}
