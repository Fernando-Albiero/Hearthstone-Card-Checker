import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
      alignItems: 'center',
      paddingTop: 30,
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: Platform.OS === 'ios' ? 50 : '',
      marginBottom: Platform.OS === 'ios' ? 30 : ''
   },
   manaCostText:{
      fontSize: 18,
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: 30,
      alignSelf: "flex-start"
   },
   costsList:{
      height: '15%',
      flexGrow: 0,
      marginBottom: 10,
      paddingTop: 5,
      borderWidth: 2,
      borderRadius: 20
   },
   costWrapper: {
      justifyContent: 'center', 
      paddingLeft: 20
   },
   costImage:{
      width: 30, 
      height: 30, 
      resizeMode: 'contain'
   },
   loading:{
      width: '100%', 
      height: '72%', 
      justifyContent:'center', 
      alignItems: 'center',
      marginBottom: 10,
   },
   loadingMessage:{
      fontSize: 14,
      fontFamily: 'IBMPlexMono',
      marginBottom: 10
   },
   loadingSubMessage:{
      width: '100%',
      textAlign: 'center', 
      fontSize: 18,
      fontFamily: 'IBMPlexMono-Bold',
      marginBottom: 30
   },
   cardList:{
      width: '100%',
      height: '80%', 
      marginBottom: 10,
   },
   cardConteiner:{
      alignItems: 'center',
   },
   cardImage:{
      width: 300, 
      height: 300, 
      resizeMode: "contain"
   },
})

export default styles;