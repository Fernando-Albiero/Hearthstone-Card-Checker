import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from './Metrics';

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingTop: verticalScale(50),
      paddingLeft: horizontalScale(20),
      paddingRight: horizontalScale(20),
      marginTop: Platform.OS === 'ios' ? verticalScale(50) : '',
      marginBottom: Platform.OS === 'ios' ? verticalScale(30) : ''
   },
   manaCostText:{
      fontSize: moderateScale(22),
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: verticalScale(30),
      marginLeft: horizontalScale(10),
      alignSelf: "flex-start"
   },
   costsList:{
      width: '100%',
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      justifyContent: 'center',
      alignContent: 'center',
      paddingBottom: verticalScale(5), 
      paddingTop: verticalScale(5),
      marginBottom: verticalScale(30) 
   },
   costImage:{
      width: horizontalScale(50), 
      height: verticalScale(50), 
      resizeMode: 'contain'
   },
   loading:{
      height: '50%',
      width: '90%', 
      justifyContent:'center', 
      alignItems: 'center',
   },
   loadingMessage:{
      fontSize: moderateScale(18),
      fontFamily: 'IBMPlexMono',
      marginBottom: verticalScale(10),
      marginTop: verticalScale(20),
      marginLeft: horizontalScale(30),
      marginRight: horizontalScale(20)
   },
   loadingSubMessage:{
      textAlign: 'center', 
      fontSize: moderateScale(25),
      fontFamily: 'IBMPlexMono-Bold',
      marginTop: verticalScale(40),
      marginBottom: verticalScale(40)
   },
   cardList:{
      width: '90%',
      height: '80%', 
      marginBottom: verticalScale(80),
   },
   cardConteiner:{
      alignItems: 'center',
   },
   cardImage:{
      width: horizontalScale(400), 
      height: verticalScale(400), 
      resizeMode: "contain"
   },
})

export default styles;