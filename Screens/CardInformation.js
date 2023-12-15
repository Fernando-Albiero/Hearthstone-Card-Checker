import { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './CardInformationStyle';

let customFonts = {
   'BelweBoldBT': require('../assets/fonts/BelweBoldBT.ttf'),
   'Inter' : require('../assets/fonts/Inter-Regular.ttf'),
   'Inter-Bold' : require('../assets/fonts/Inter-Bold.ttf')
 };

export default function CardInformation({route}) {
   const {data} = route.params;

   const [isLoaded] = useFonts(customFonts);

   const [loading, setLoading] = useState(false);
   const [name, setName] = useState('');
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
   }, [route.params]);

   function fetchData(){
      setLoading(true);

      setName(data[0].name);
      setFlavor(data[0].flavor);
      setText(clearText(data[0].text));
      setType(data[0].type);
      setRarity(data[0].rarity);
      setCardSet(data[0].cardSet);
      setCardClass(data[0].playerClass);
      setArtist(data[0].artist);

      if(data[0].hasOwnProperty('img')){
         setUri(data[0].img);
      }
      
      setLoading(false);
   }

   function clearText(txt){
      if(txt.includes('<b>'))
         txt = txt.replace(/[<b></b>]/g, ''); //Remove <b></b> tags.
      if(txt.includes('\\n'))
         txt = txt.replace(/\\n/g, ' '); //Replace \n for blank space.
      if(txt.includes('_'))
         txt = txt.replace(/_/g, ' '); //Replace \n for blank space.

      return txt;
   }

   if(isLoaded){
      return (
         <View style={ styles.container }>
           {
              loading ? (
                 <View style={ styles.loading }>
                    <ActivityIndicator size={25} color='black'/>
                 </View>
              ) :
              (
                 <View style={ styles.inner }>
                     <Text style={ styles.cardName }>{name}</Text>
                     <Text style={ styles.cardFlavor }>{flavor}</Text>
                     <Text style={ styles.cardText }>{text}</Text>
                     <Text style={ styles.titles }>Type:{" "}
                        <Text style={ styles.information }>{type}</Text>
                     </Text>
                     <Text style={ styles.titles }>Rarity:{" "}
                        <Text style={ styles.information }>{rarity}</Text>
                     </Text>
                     <Text style={ styles.titles }>Set:{" "}
                        <Text style={ styles.information }>{cardSet}</Text>
                     </Text>
                     <Text style={ styles.titles }>Class:{" "} 
                        <Text style={ styles.information }>{cardClass}</Text>
                     </Text>
                     <Text style={ styles.titles }>Artist:{" "}
                        <Text style={ styles.information }>{artist}</Text>
                     </Text>
                     <View style={ styles.imageConteiner}>
                        <Image
                           style={{ width: '50%', height: '80%', marginTop:-30 }}
                           source={{ uri: uri }}
                           resizeMode="contain"
                        />
                     </View>
                 </View>
              )
           }
         </View>
      )  
   }
}