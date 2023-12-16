import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      paddingTop: 30,
      paddingLeft: 20,
      paddingRight: 20
   },
   manaCostText:{
      fontSize: 18,
      fontFamily: 'IBMPlexMono',
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: "flex-start"
   },
   costsList:{
      height: '6%',
      flexGrow: 0,
      marginBottom: 10,
   },
   costs:{
      width: 25, 
      height: 25, 
      resizeMode: 'contain'
   },
   loading:{
      width: '100%', 
      height: '85%', 
      justifyContent:'center', 
      alignItems: 'center',
   },
   cardList:{
      width: '100%',
      height: '85%', 
      marginBottom: 10,
   },
   cardConteiner:{
      alignItems: 'center',
   }
})

export default styles;