import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      paddingTop: 50,
      marginTop: Platform.OS === 'ios' ? 50 : '',
      marginBottom: Platform.OS === 'ios' ? 30 : ''
   },
   deckName:{
      fontSize: 18,
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: 30,
      marginLeft: 50
   },
   selectList:{
      borderWidth: 2, 
      borderColor: 'black', 
      alignSelf: 'center', 
      width: '80%', 
      marginLeft: 20,
      marginRight: 20
   },
   dropdownMenu:{
      backgroundColor: "white",
      width: "80%",
      top: -10,
      alignSelf: 'center',
      zIndex: 999,
      borderColor: 'black',
      borderWidth: 2
   },
   list:{
      marginTop: 10,
      marginBottom: 80,
      width: '100%',
      backgroundColor: 'purple'
   },
   cardConteiner:{
      alignItems: 'center',
      marginBottom: 10,
      backgroundColor: 'yellow'
   },
   cardImage:{
      width: 300,
      height: 300,
      resizeMode: 'contain'
   },
   loading:{
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '70%',
      marginTop: 10,
   }
});

export default styles;