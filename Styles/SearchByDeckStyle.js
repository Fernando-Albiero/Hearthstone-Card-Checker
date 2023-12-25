import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from './Metrics';


const styles = StyleSheet.create({
   container:{
      flex: 1,
      paddingTop: verticalScale(50),
      marginTop: Platform.OS === 'ios' ? verticalScale(50) : '',
      marginBottom: Platform.OS === 'ios' ? verticalScale(30) : ''
   },
   deckName:{
      fontSize: moderateScale(22),
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: verticalScale(30),
      marginLeft: horizontalScale(50)
   },
   selectList:{
      borderWidth: moderateScale(2), 
      borderColor: 'black', 
      alignSelf: 'center', 
      width: '80%', 
      marginLeft: horizontalScale(20),
      marginRight: horizontalScale(20)
   },
   dropdownMenu:{
      backgroundColor: "white",
      width: "80%",
      top: verticalScale(-10),
      alignSelf: 'center',
      zIndex: 999,
      borderColor: 'black',
      borderWidth: moderateScale(2)
   },
   list:{
      marginTop: verticalScale(10),
      marginBottom: verticalScale(80),
      width: '100%',
   },
   cardConteiner:{
      alignItems: 'center',
      marginBottom: verticalScale(10),
   },
   cardImage:{
      width: horizontalScale(400),
      height: verticalScale(400),
      resizeMode: 'contain'
   },
   loading:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '70%',
      marginTop: verticalScale(10),
   }
});

export default styles;