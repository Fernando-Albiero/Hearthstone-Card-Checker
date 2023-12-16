import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 30,
   },
   deckName:{
      fontSize: 18,
      fontFamily: 'IBMPlexMono',
      fontWeight: 'bold',
      marginBottom: 10
   },
   dropdownMenu:{
      backgroundColor: "white",
      position: "absolute",
      top: 40,
      width: "100%",
      zIndex: 999,
   },
   list:{
      marginTop: 20,
      marginBottom: 10,
      width: '100%'
   },
   cardConteiner:{
      alignItems: 'center',
      marginBottom: 20
   },
   image:{
      width: 300,
      height: 300,
      resizeMode: 'contain'
   },
   loading:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '80%',
      marginTop: 10,
   }
});

export default styles;