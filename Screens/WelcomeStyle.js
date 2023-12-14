import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff'
   },
   welcome:{
      fontSize: 20,
      marginTop: 50
   },
   title:{
      fontSize: 32,
      fontWeight: 'bold',
      letterSpacing: -2,
      marginTop: 20,
      marginBottom: 20
   },
   text:{
      fontSize: 18,
      textAlign: 'center',
      marginLeft: 25,
      marginRight: 25
   },
   button:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 40,
      borderRadius: 20,
      backgroundColor: 'black',
      borderWidth: 1,
      marginTop: 20,
      marginBottom: 20
   },
   buttonText:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16
   },
   credits:{
      fontSize: 12,
      textAlign: 'center',
   },
   socialMediaConteiner:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '25%',
      marginTop: 20,
   },
   socialMediaImage:{
      width: 32,
      height: 32,
      resizeMode: 'contain'
   }
})

export default styles;