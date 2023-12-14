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
   input:{
      width: '90%',
      height: 40,
      borderWidth: 1,
      borderRadius: 20,
      marginTop: 15,
      marginBottom: 15,
      paddingLeft: 10,
      fontSize: 16,
      //fontFamily: 'fix it'
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
      fontWeight: 'bold',
      fontSize: 16
   }
})

export default styles;