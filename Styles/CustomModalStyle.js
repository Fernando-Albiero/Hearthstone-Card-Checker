import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale, windowHeight } from './Metrics';

const styles = StyleSheet.create({
   container:{
      flex: 1, 
      width: '100%', 
      height: '100%'
   },
   modal:{
      width: horizontalScale(300), 
      backgroundColor: 'white',
      borderRadius: moderateScale(20), 
      borderWidth: moderateScale(2), 
      padding: 10, 
      alignSelf: 'center',
      marginTop:  (windowHeight/2)-verticalScale(200)
   },
   closeButton:{
      alignSelf: 'flex-end', 
      marginBottom: verticalScale(10)
   },
   text:{
      fontFamily: 'IBMPlexMono'
   },
   title:{
      fontSize: moderateScale(16), 
      fontFamily: 'IBMPlexMono-Bold'
   }
});

export default styles;