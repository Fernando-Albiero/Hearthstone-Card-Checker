import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale, windowHeight } from './Metrics';

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? verticalScale(50) : '',
      marginBottom: Platform.OS === 'ios' ? verticalScale(30) : '',
   },
   cardConteiner:{
      width: '100%',
      height: '70%',
      justifyContent: 'center',
      alignItems: 'center',
   },
   cardImage:{
      width: horizontalScale(400),
      height: verticalScale(400), 
      resizeMode: 'contain',
   },
   information:{
      fontSize: moderateScale(12),
   },
   bottomContainer:{
      height: '30%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      backgroundColor: 'purple',
      paddingBottom: verticalScale(50)
   },
   inputRow:{
      flexDirection: 'row', 
      alignItems: 'center'
   },
   input:{
      width: '80%',
      height: verticalScale(50),
      borderWidth: 2,
      borderRadius: 15,
      marginTop: verticalScale(15),
      marginBottom: verticalScale(15),
      paddingLeft: horizontalScale(20),
      fontSize: moderateScale(16),
      fontFamily: 'IBMPlexMono'
   },
   button:{
      justifyContent: 'center',
      alignItems: 'center',
      width: horizontalScale(120),
      height: verticalScale(50),
      borderRadius: 25,
      backgroundColor: 'black',
   },
   buttonText:{
      color: 'white',
      fontSize: moderateScale(17),
      fontFamily: 'IBMPlexMono-Bold'
   },
   modal:{
      width: horizontalScale(300), 
      backgroundColor: 'white',
      borderRadius: 20, 
      borderWidth: 2, 
      padding: 10, 
      alignSelf: 'center',
      marginTop:  (windowHeight/2)-200
   }
})

export default styles;