import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import styles from '../Styles/CardInformationStyle';

export default function CardInformation({route, navigation}) {
   const {cardName, language} = route.params;
   const [loading, setLoading] = useState(true);
   const [card, setCard] = useState(null);
   
   useEffect(() => {
      fetchData();
   }, [route.params]);

   //Function to get data from HearthStone API.
   async function fetchData(){
      setLoading(true);

      try {
         //Do the request.
         const response = await axios.request(`https://hearthstone-card-checker-backend.onrender.com/cardInformation/${cardName}`, {
            params: {
               locale: language.id
            },
         });

         const { card } = response.data;

         if(card){
            setCard(card);
         }
      }
      catch(error){
         alert(error);
      }
      
      setLoading(false);
   }

   return (
      <View 
         style={ styles.container }>
         {
            loading ? (
               <View style={ styles.loading }>
                  <ActivityIndicator size={40} color='black'/>
               </View>
            ) :
            (
               <View style={ styles.innerContainer }>
                  <ScrollView style={ styles.scroll }>
                     <Text style={ styles.cardName }>{card.name}</Text>
                     <Text style={ styles.cardFlavor }>{'\''}{card.flavor}{'\''}</Text>
                     <Text style={ styles.cardText }>{ card.text }</Text>
                     <Text style={ styles.titles }>{language.CIType}
                        <Text style={ styles.information }>{card.type}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CIRarity}
                        <Text style={ styles.information }>{card.rarity}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CISet}
                        <Text style={ styles.information }>{card.cardSet}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CIClass}
                        <Text style={ styles.information }>{card.playerClass}</Text>
                     </Text>
                     <Text style={ styles.titles }>{language.CIArtist}
                        <Text style={ styles.information }>{card.artist}</Text>
                     </Text>
                  
                     <TouchableOpacity 
                        style={ styles.imageConteiner}
                        onPress={ () => navigation.goBack() }>
                        <Image
                           style={ styles.cardImage }
                           source={{ uri: card.img }}
                        />
                     </TouchableOpacity>
                  </ScrollView>
                  <Text style={ styles.back }>{language.CIBack}<Text style={{ fontWeight: 'bold' }}>{language.CIBackBold}</Text></Text>
               </View>
            )
         }
      </View>
   )  
}