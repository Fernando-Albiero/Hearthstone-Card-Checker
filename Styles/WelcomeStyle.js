import { StyleSheet } from 'react-native';
import { verticalScale, horizontalScale, moderateScale } from './Metrics';

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop: Platform.OS === 'ios' ? verticalScale(50) : '',
      marginBottom: Platform.OS === 'ios' ? verticalScale(30) : '',
   },
   flagsView:{
      width: '100%', 
      height: '7%', 
      flexDirection: 'row', 
      justifyContent: 'flex-end', 
      alignItems: 'flex-end'
   },
   flagBr:{
      width: horizontalScale(50), 
      height: verticalScale(50), 
      resizeMode: 'contain'
   },
   flagEn:{
      width: horizontalScale(50), 
      height: verticalScale(50), 
      resizeMode: 'contain', 
      marginRight: horizontalScale(25), 
      marginLeft: horizontalScale(15)
   },
   textView:{
      height: '93%', 
      justifyContent: 'center', 
      alignItems: 'center'
   },
   welcome:{
      fontSize: moderateScale(20),
      fontFamily: 'IBMPlexMono'
   },
   title:{
      fontSize: moderateScale(32),
      letterSpacing: -2,
      marginTop: verticalScale(20),
      marginBottom: verticalScale(20),
      fontFamily: 'Uncial-Caps'
   },
   text:{
      fontSize: moderateScale(16),
      textAlign: 'center',
      marginLeft: horizontalScale(25),
      marginRight: horizontalScale(25),
      fontFamily: 'IBMPlexMono'
   },
   link:{
      color: 'blue',
      textDecorationLine: 'underline' 
   },
   button:{
      justifyContent: 'center',
      alignItems: 'center',
      width: horizontalScale(120),
      height: verticalScale(50),
      borderRadius: moderateScale(20),
      backgroundColor: 'black',
      borderWidth: moderateScale(1),
      marginTop: verticalScale(20),
      marginBottom: verticalScale(20)
   },
   buttonText:{
      color: 'white',
      fontFamily: 'IBMPlexMono-Bold',
      fontSize: moderateScale(17)
   },
   credits:{
      fontSize: moderateScale(12),
      textAlign: 'center',
      fontFamily: 'IBMPlexMono'
   },
   socialMediaConteiner:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '25%',
      marginTop: verticalScale(20),
   },
   socialMediaImage:{
      width: horizontalScale(40),
      height: verticalScale(40),
      resizeMode: 'contain'
   }
})

export default styles;