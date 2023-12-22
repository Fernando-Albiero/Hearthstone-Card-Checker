import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import SearchByName from '../Screens/SearchByName';
import SearchByDeck from '../Screens/SearchByDeck';
import SearchByMana from '../Screens/SearchByMana';
import styles from '../Styles/SwiperStyle';

export default function SwiperComponent({navigation, route}) {
   const {language} = route.params;
   
   return (
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

         <View style={{ flex: 1 }}>
            <SearchByName navigation={navigation} language={language}/>
         </View>
         <View style={{ flex: 1 }}>
            <SearchByDeck navigation={navigation} language={language}/>
         </View>
         <View style={{ flex: 1 }}>
            <SearchByMana navigation={navigation} language={language}/>
         </View>
      </Swiper>
   );
 }