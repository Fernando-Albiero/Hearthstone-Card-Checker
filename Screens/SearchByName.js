import { ActivityIndicator, Image, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
import styles from '../Styles/SearchByNameStyle';
import { options } from '../RequestOptionsAndDecks';

export default function SearchByName({navigation}) {
   const [cardName, setCardName] = useState('');
   const [cardImage, setCardImage] = useState(
      'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
   );
   const [card, setCard] = useState({});
   const [loading, setLoading] = useState(false);
   const [request, setRequest] = useState(false);
   
   //Function to handle with searches.
   const requestAPI = async () => {
      //Start loading.
      setLoading(true);
      setCardImage('https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg');
      setRequest(false);

      //Verify card name.
      if (cardName != '') {
         try {
            //Do the request to hearthstone API.
            const response = await axios.request(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`, options);
            const data = response.data;

            if(data.length > 0){
               //Extract card image and information.
               for(let i=0; i<data.length; i++){
                  if(data[i].hasOwnProperty('img')){
                     setCard(data[i]);
                     setCardImage(data[i].img);
                     setRequest(true);
                     break;
                  }
               }
            }
            else{
               alert('Card not find!\n\nDid you type the card name correctly?');
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
         navigation.navigate('CardInformation', {cardName: card.name});
      }
   }

   return (
      <View style={ styles.container }>
         {
            loading ? (
               <View style={ styles.cardConteiner }>
                  <ActivityIndicator size={ 40 } color="black" />
               </View>
             ) : 
             (
               <TouchableOpacity 
                  style={ styles.cardConteiner }
                  onPress={ handleCardPress }>
                  <Image
                     style={{ width: '80%', height: '80%' }}
                     source={{ uri: cardImage }}
                     resizeMode="contain"
                  />
               </TouchableOpacity>
            )
         }
         <TextInput
            style={ styles.input }
            onChangeText={ (name) => setCardName(name.toLowerCase()) }
            placeholder='Type a card name'
         />
         <TouchableHighlight style={ styles.button } onPress={ requestAPI }>
            <Text style={ styles.buttonText }>Search</Text>
         </TouchableHighlight>
      </View>
   );
}
