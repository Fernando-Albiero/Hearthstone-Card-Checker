import { ActivityIndicator, Image, Keyboard, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useState } from 'react';
import axios from 'axios';
import CustomModal from '../Components/CustomModal';
import styles from '../Styles/SearchByNameStyle';

export default function SearchByName(props) {
   const { navigation, language } = props;
   const [name, setName] = useState('');
   const [cardName, setCardName] = useState('');
   const [cardImage, setCardImage] = useState(require('../assets/cardback.png'));
   const [loading, setLoading] = useState(false);
   const [request, setRequest] = useState(false);
   const [showModal, setShowModal] = useState(false);
   const [modalTitle, setModalTitle] = useState('');
   const [modalText, setModalText] = useState('');
   const [opacity, setOpacity] = useState(1);
   
   //Function to request card to backend.
   const requestCard = async (name) => {
      setLoading(true);
      setCardImage(require('../assets/cardback.png'));
      setRequest(false);

      if (name != '') {
         setCardName(name);

         try {
            const response = await axios.get(`https://hearthstone-card-checker-backend.onrender.com/searchByName/${name}`, {
               params: {
                  locale: language.id
               },
            });
            const { cardImage } = response.data;

            if (cardImage) {
               setCardImage(cardImage);
               setRequest(true);
            } else {
               handleModal(language.SBNModalTitle2, language.SBNModalText2);
            }
         } catch (error) {
            handleModal(language.SBNModalTitle2, language.SBNModalText2);
         }  
      } else {
         handleModal(language.SBNModalTitle2, language.SBNModalText3);
      }

      setLoading(false);
   };

   //Function to handle with click on card.
   const handleCardPress = () => {
      Keyboard.dismiss();
      if(request){
         navigation.navigate('CardInformation', {cardName: cardName, language: language});
      }
      else{
         handleModal(language.SBNMModalTitle1, language.SBNModalText1);
      }
   }

   //Function to handle modal.
   const handleModal = (title, text) => {
      setModalTitle(title);
      setModalText(text);
      setShowModal(!showModal);

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
                        <Text style={ styles.information }>{language.SBNBack}<Text style={{ fontWeight: 'bold'}}>{language.SBNBackBold}{language.SBNBackInformation}</Text></Text>
                     ) : <></>
                  }   
               </View>
            )
         }
         <View 
            style={ styles.bottomContainer }
            behavior={'height'}>
            <View style={ styles.inputRow }>
               <TextInput
                  style={ styles.input }
                  onChangeText={ (name) => setName(name.toLowerCase()) }
                  placeholder={language.SBNInputText}
               />
               <TouchableHighlight 
                  onPress={ () => handleModal( language.SBNMModalTitle1, language.SBNModalText1) } 
                  underlayColor='none'>
                  <AntDesign name="questioncircle" size={ 40 } color="black" style={{marginLeft: 5}} />
               </TouchableHighlight>
            </View>
            <TouchableHighlight 
               style={ styles.button } 
               onPress={ () => requestCard(name) }>
               <Text style={ styles.buttonText }>{language.SBNButtonSearch}</Text>
            </TouchableHighlight>
         </View>
         {
            showModal ? (
               <CustomModal 
                  showModal={ showModal }
                  handleModal={ () => handleModal() }
                  title={ modalTitle }
                  text={ modalText }
               />
               ) :
               <></>
         }
      </View>
   );
}
