import { View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function SearchByName() {
   const [cardName, setCardName] = useState('');
   const [uri, setUri] = useState(
      'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
   );

   const options = {
      method: 'GET',
      headers: {
         'X-RapidAPI-Key': '81935cf82dmsh5cbfb766a872ce7p16553cjsnec4be953734c',
         'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
      },
   };

   const handleSearch = async () => {
      if (cardName != '') {
         await fetch(
            `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${cardName}`,
            options
         )
            .then((response) => response.json())
            .then((data) => {
               if (data.error) {
                  setUrl(
                     'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'
                  );
               } else {
                  //Cartas lendárias possuem mais de uma imagem. A correta é sempre a última.
                  var imagesUri = [];
                  for (let i = 0; i < data.length; i++) {
                     if (data[i].hasOwnProperty('img')) {
                        imagesUri.push(data[i].img);
                     }
                  }

                  if (imagesUri.length > 0) {
                     setUri(imagesUri[imagesUri.length - 1]);
                  }
               }
            })
            .catch((error) => alert(error));
      } else {
         alert('Please, inform the card name.');
      }
   };

   return (
      <View style={{ flex: 1, alignItems: 'center' }}>
         <Image
            style={{ width: '90%', height: '80%' }}
            source={{ uri: uri }}
            resizeMode="contain"
         />
         <TextInput
            style={{ borderWidth: 1, width: 300, marginBottom: 20 }}
            onChangeText={(name) => setCardName(name)}
         />
         <View style={{ width: 150 }}>
            <Button title="Search" color={'black'} onPress={handleSearch} />
         </View>
      </View>
   );
}
