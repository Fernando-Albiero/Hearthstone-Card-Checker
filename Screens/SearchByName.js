import { View, Image, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function SearchByName() {
   const [cardName, setCardName] = useState('');
   const [uri, setUri] = useState(
      'https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg'
   );

   const handleSearch = () => {};

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
