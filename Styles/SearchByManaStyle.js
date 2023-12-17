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
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: 10,
      alignSelf: "flex-start"
   },
   costsList:{
      height: '12%',
      flexGrow: 0,
      marginBottom: 10,
   },
   costs:{
      width: 30, 
      height: 30, 
      resizeMode: 'contain'
   },
   loading:{
      width: '100%', 
      height: '73%', 
      justifyContent:'center', 
      alignItems: 'center',
   },
   loadingMessage:{
      fontSize: 14,
      fontFamily: 'IBMPlexMono',
      marginBottom: 10
   },
   loadingSubMessage:{
      width: '100%',
      textAlign: 'center', 
      fontSize: 14,
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: 30
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