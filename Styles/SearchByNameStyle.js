import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? 50 : '',
      marginBottom: Platform.OS === 'ios' ? 30 : ''
   },
   cardConteiner:{
      flex: 9,
      justifyContent: 'center',
      alignItems: 'center',
   },
   cardImage:{
      width: 400, 
      height: 400,
      resizeMode: 'contain',
   },
   information:{
      fontSize: 12,
   },
   bottomContainer:{
      flex: 4,
      alignItems: 'center',
      width: '100%',
   },
   input:{
      width: '80%',
      height: 40,
      borderWidth: 2,
      borderRadius: 20,
      marginTop: 15,
      marginBottom: 15,
      paddingLeft: 20,
      fontSize: 16,
      fontFamily: 'IBMPlexMono'
   },
   button:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#614326',
      borderWidth: 3
   },
   buttonText:{
      color: 'white',
      fontSize: 16,
      fontFamily: 'IBMPlexMono-Bold'
   },
   modal:{
      width: 300, 
      backgroundColor: 'white', 
      borderRadius: 20, 
      borderWidth: 2, 
      padding: 10, 
      alignSelf: 'center', 
   }
})

export default styles;