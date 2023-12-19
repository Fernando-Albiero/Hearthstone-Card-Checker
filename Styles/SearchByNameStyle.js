import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      marginTop: Platform.OS === 'ios' ? 50 : ''
   },
   cardConteiner:{
      flex: 9,
      justifyContent: 'center',
      alignItems: 'center',
   },
   cardImage:{
      width: 300, 
      height: 300,
      resizeMode: 'contain',
   },
   information:{
      fontSize: 12,
   },
   bottomContainer:{
      flex: 3.5,
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
   }
})

export default styles;