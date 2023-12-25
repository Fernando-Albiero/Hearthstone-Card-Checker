import { StyleSheet } from 'react-native';
import { verticalScale } from './Metrics';

const styles = StyleSheet.create({
   view:{
      flex: 1
   },
   prevNextButtons:{
      color: 'black',
      fontSize: 60
   },
   dots:{
      marginBottom: Platform.OS === 'ios' ? verticalScale(30) : '',
   }
});

export default styles;