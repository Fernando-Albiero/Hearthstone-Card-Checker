import { ActivityIndicator, Image, ImageBackground, Keyboard, KeyboardAvoidingView, Modal, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import styles from '../Styles/SearchByNameStyle';
import { options } from '../RequestOptionsAndDecks';

export default function SearchByName({navigation}) {
   const [cardName, setCardName] = useState('');
   const [cardImage, setCardImage] = useState(require('../assets/cardBack2.png'));
   const [card, setCard] = useState({});
   const [loading, setLoading] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [request, setRequest] = useState(false);
   
   //Function to handle with searches.
   const requestAPI = async () => {
      //Start loading.
      Keyboard.dismiss();
      setLoading(true);
      setCardImage(require('../assets/cardBack2.png'));
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
                     setCardImage({ uri: data[i].img});
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
      Keyboard.dismiss();

      if(request){
         navigation.navigate('CardInformation', {cardName: card.name});
      }
   }

   return (
      <ImageBackground 
         style={ styles.container }
         imageStyle= {{ resizeMode: 'stretch' }}
         source={ require('../assets/background.png')}>
         {
            loading ? (
               <View style={ styles.cardConteiner }>
                  <ActivityIndicator size={ 40 } color="black" />
               </View>
             ) : 
             (
               <View style={ styles.cardConteiner }>
                  <TouchableOpacity 
                     onPress={ handleCardPress }>
                     <Image
                        style={ styles.cardImage }
                        source={ cardImage }
                        resizeMode="contain"
                     />
                  </TouchableOpacity>
                  {
                     request ? (
                        <Text style={ styles.information }>Tap on card for <Text style={{ fontWeight: 'bold'}}>more</Text> information!</Text>
                     ) : <></>
                  }
               </View>
            )
         }
         <KeyboardAvoidingView 
            style={ styles.bottomContainer }
            behavior={Platform.OS === 'ios' ? 'padding' : ''}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
               <TextInput
                  style={ styles.input }
                  onChangeText={ (name) => setCardName(name.toLowerCase()) }
                  placeholder='Type a card name...'
               />
               <TouchableHighlight onPress={ () => setIsModalVisible(!isModalVisible) } underlayColor='none'>
                  <AntDesign name="questioncircle" size={ 36 } color="black" style={{marginLeft: 5}} />
               </TouchableHighlight>
            </View>
            <TouchableHighlight style={ styles.button } onPress={ requestAPI }>
               <Text style={ styles.buttonText }>Search</Text>
            </TouchableHighlight>
         </KeyboardAvoidingView>
         <Modal
            visible={ isModalVisible }
            animationType='fade'
            statusBarTranslucent={ false }
            onRequestClose={ () => setIsModalVisible(false) }
            transparent={ true }>

            <View 
               style={{ width: 300, backgroundColor: 'white', borderRadius: 20, borderWidth: 2, padding: 10, alignSelf: 'center', marginTop: 100 }}>
               <TouchableOpacity 
                  style={{ alignSelf: 'flex-end', marginBottom: 10 }}
                  onPress={ () => setIsModalVisible(false) }>
                  <AntDesign name="closecircleo" size={24} color="black" />
               </TouchableOpacity>
            
               <Text style={{ fontFamily: 'IBMPlexMono' }}>
                  <Text style={{ fontSize: 16, fontFamily: 'IBMPlexMono-Bold'}}>Dont you know any card?{'\n\n'}</Text>
                     Try some of these names:{'\n\n'}
                     - Archmage Antonidas{'\n'}
                     - Cage Head{'\n'}
                     - DJ Manastorm{'\n'}
                     - Frost Strike{'\n'}
                     - The Jailer{'\n'}
                     - Ysera{'\n'}
                  </Text>
            </View>
         </Modal>
      </ImageBackground>
   );
}
