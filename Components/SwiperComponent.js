import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import SearchByName from '../Screens/SearchByName';
import SearchByDeck from '../Screens/SearchByDeck';
import SearchByMana from '../Screens/SearchByMana';
import styles from '../Styles/SwiperStyle';

export default function SwiperComponent({navigation}) {
   return (
      <Swiper 
         
         showsButtons={true}
         index={0}
         loop={false}
         dotStyle={ styles.dots }
         activeDotStyle={ styles.dots }
         activeDotColor='#614326'
         prevButton={ <Text style={ styles.prevNextButtons}>‹</Text> }
         nextButton={ <Text style={ styles.prevNextButtons}>›</Text> }>

         <View style={{ flex: 1}}>
            <SearchByName navigation={navigation}/>
         </View>
         <View style={{ flex: 1}}>
            <SearchByDeck navigation={navigation}/>
         </View>
         <View style={{ flex: 1}}>
            <SearchByMana navigation={navigation}/>
         </View>
      </Swiper>
   )
 }