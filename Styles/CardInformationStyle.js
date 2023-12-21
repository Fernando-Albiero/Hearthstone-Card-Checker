import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale, moderateScale } from './Metrics';

const styles = StyleSheet.create({
   container:{
      flex: 1,
      marginTop: Platform.OS === 'ios' ? verticalScale(50) : '',
      marginBottom: Platform.OS === 'ios' ? verticalScale(30) : '',
   },
   loading:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   innerContainer:{
      flex:1,
   },
   scroll:{ 
      paddingTop: verticalScale(50),
   },
   cardName:{
      fontSize: moderateScale(40),
      fontFamily: 'BelweBoldBT',
      marginLeft: horizontalScale(30),
      marginRight: horizontalScale(30),
      marginBottom: verticalScale(20)
   },
   cardFlavor:{
      fontSize: moderateScale(20),
      color: 'gray',
      fontFamily: 'Inter',
      fontStyle: 'italic',
      marginLeft: horizontalScale(30),
      marginRight: horizontalScale(30),
      marginBottom: verticalScale(20)
   },
   cardText:{
      fontSize: moderateScale(16),
      fontFamily: 'Inter',
      marginLeft: horizontalScale(30),
      marginRight: horizontalScale(30),
      marginBottom: verticalScale(20)
   },
   titles:{
      fontSize: moderateScale(16),
      fontFamily: 'Inter-Bold',
      marginLeft: horizontalScale(30),
      marginBottom: verticalScale(10)
   },
   information:{
      fontSize: moderateScale(14),
      fontFamily: 'Inter',
      marginBottom: verticalScale(10),
   },
   imageConteiner:{
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: verticalScale(20),
      marginBottom: verticalScale(100)
   },
   cardImage:{
      width: horizontalScale(300),
      height: verticalScale(300),
      resizeMode:"contain", 
   },
   back:{
      fontSize: moderateScale(12),
      marginTop: verticalScale(10),
      marginBottom: verticalScale(40),
      alignSelf: 'center'
   }
})

export default styles;