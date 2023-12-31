import { View, Text, KeyboardAvoidingView } from 'react-native';
import Swiper from 'react-native-swiper';
import SearchByName from '../Screens/SearchByName';
import SearchByDeck from '../Screens/SearchByDeck';
import SearchByMana from '../Screens/SearchByMana';
import styles from '../Styles/SwiperStyle';

export default function SwiperComponent({navigation, route}) {
   const {language} = route.params;
   
   return (
      <KeyboardAvoidingView
         style={{flex:1}}
         contentContainerStyle={{flexGrow: 1}}
         behavior="position"
         enabled
         keyboardVerticalOffset={Platform.select({ ios: 0, android: -90 })}
      >
      <Swiper
         activeDotStyle={ styles.dots }
         activeDotColor='black'
         dotStyle={ styles.dots }
         index={0}
         loop={false} 
         showsButtons={true}
         nextButton={ <Text style={ styles.prevNextButtons}>›</Text> }
         prevButton={ <Text style={ styles.prevNextButtons}>‹</Text> }
      >

         <View style={ styles.view }>
            <SearchByName navigation={navigation} language={language}/>
         </View>
         <View style={ styles.view }>
            <SearchByDeck navigation={navigation} language={language}/>
         </View>
         <View style={ styles.view }>
            <SearchByMana navigation={navigation} language={language}/>
         </View>
      </Swiper>
      </KeyboardAvoidingView>
   );
 }