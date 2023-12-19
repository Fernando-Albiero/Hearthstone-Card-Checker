import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#fff',
      marginTop: Platform.OS === 'ios' ? 50 : ''
   },
   welcome:{
      fontSize: 20,
      marginTop: 50,
      fontFamily: 'IBMPlexMono'
   },
   title:{
      fontSize: 32,
      letterSpacing: -2,
      marginTop: 20,
      marginBottom: 20,
      fontFamily: 'Uncial-Caps'
   },
   text:{
      fontSize: 16,
      textAlign: 'center',
      marginLeft: 25,
      marginRight: 25,
      fontFamily: 'IBMPlexMono'
   },
   link:{
      color: 'blue',
      textDecorationLine: 'underline' 
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
      fontFamily: 'IBMPlexMono-Bold',
      fontSize: 16
   },
   credits:{
      fontSize: 12,
      textAlign: 'center',
      fontFamily: 'IBMPlexMono'
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