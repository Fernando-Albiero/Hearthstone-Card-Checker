import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
   },
   cardConteiner:{
      justifyContent: 'center',
      alignItems: 'center',
      height: '75%',
      width: '100%',
   },
   cardImage:{
      width: '85%', 
      height: '85%',
      resizeMode: 'contain',
   },
   input:{
      width: '90%',
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
      backgroundColor: 'black',
      borderWidth: 1
   },
   buttonText:{
      color: 'white',
      fontSize: 16,
      fontFamily: 'IBMPlexMono-Bold'
   }
})

export default styles;