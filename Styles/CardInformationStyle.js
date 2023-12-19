import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 50 : '',
      marginBottom: Platform.OS === 'ios' ? 30 : '',
   },
   innerContainer:{
      flex:1, 
      alignItems: 'center'
   },
   scroll:{ 
      marginTop: 50,
   },
   loading:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   cardName:{
      fontSize: 32,
      fontFamily: 'BelweBoldBT',
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 20
   },
   cardFlavor:{
      fontSize: 16,
      color: 'gray',
      fontFamily: 'Inter',
      fontStyle: 'italic',
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 10
   },
   cardText:{
      fontSize: 14,
      fontFamily: 'Inter',
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 20
   },
   titles:{
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      marginLeft: 30,
      marginBottom: 5
   },
   information:{
      fontSize: 12,
      fontFamily: 'Inter',
      marginBottom: 5,
   },
   imageConteiner:{
      justifyContent: 'center',
      alignItems: 'center',
   },
   cardImage:{
      width: 300,
      height: 300,
      resizeMode:"contain", 
   },
   back:{
      fontSize: 10,
      marginTop: 10,
      marginBottom: 40
   }
})

export default styles;