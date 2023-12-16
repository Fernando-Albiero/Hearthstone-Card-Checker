import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: 'pink',
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 30
   },
   deckName:{
      alignSelf: 'flex-start',
      fontSize: 18,
      fontFamily: 'IBMPlexMono',
      fontWeight: 'bold',
      marginBottom: 10
   },
   dropdownMenu:{
      alignSelf: 'flex-start'
   },
   list:{
      alignSelf: 'flex-start',
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: 'yellow',
      width: '70%'
   },
   cardConteiner:{
      backgroundColor: 'green'
   }
});

export default styles;