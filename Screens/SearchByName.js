import { ActivityIndicator, Image, Keyboard, KeyboardAvoidingView, Modal, Text, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 
import axios from 'axios';
import styles from '../Styles/SearchByNameStyle';
import { options } from '../RequestOptionsAndDecks';
import { BlurView } from 'expo-blur';

export default function SearchByName({navigation}) {
   const [cardName, setCardName] = useState('');
   const [cardImage, setCardImage] = useState(require('../assets/cardBack2.png'));
   const [card, setCard] = useState({});
   const [loading, setLoading] = useState(false);
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [opacity, setOpacity] = useState(1);
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
         navigation.navigate('CardInformation', {cardName: cardName});
      }
   }

   const handleModal = () => {
      setIsModalVisible(!isModalVisible)
      if(opacity == 1)
         setOpacity(0.5)
      else
         setOpacity(1);
   }

   return (
      <View 
         style={ [styles.container, {opacity: opacity}] }>
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
            behavior={'height'}>

            <View style={ styles.inputRow }>
               <TextInput
                  style={ styles.input }
                  onChangeText={ (name) => setCardName(name.toLowerCase()) }
                  placeholder='Type a card name...'
               />
               <TouchableHighlight onPress={ handleModal } underlayColor='none'>
                  <AntDesign name="questioncircle" size={ 40 } color="black" style={{marginLeft: 5}} />
               </TouchableHighlight>
            </View>
            <TouchableHighlight style={ styles.button } onPress={ requestAPI }>
               <Text style={ styles.buttonText }>Search</Text>
            </TouchableHighlight>
         </KeyboardAvoidingView>
         <Modal
            visible={ isModalVisible }
            dismiss= { () => setIsModalVisible(false) }
            animationType='fade'
            statusBarTranslucent={ false }
            transparent={ true }>
            
            <TouchableWithoutFeedback  onPress={ handleModal }>
               <View style={{ flex: 1, width: '100%', height: '100%'}}>
                  <TouchableWithoutFeedback>
                     <View
                        style={ styles.modal }>
                        <TouchableOpacity 
                           style={{ alignSelf: 'flex-end', marginBottom: 10 }}
                           onPress={ handleModal }>
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
                  </TouchableWithoutFeedback>
               </View>
            </TouchableWithoutFeedback>
         </Modal>
      </View>
   );
}
