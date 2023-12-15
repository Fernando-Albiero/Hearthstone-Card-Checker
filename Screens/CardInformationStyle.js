import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
   container:{
      flex: 1,
   },
   loading:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   },
   inner:{
      flex: 1
   },
   cardName:{
      fontSize: 36,
      fontFamily: 'BelweBoldBT',
      marginTop: 30,
      marginLeft: 20
   },
   cardFlavor:{
      fontSize: 16,
      color: 'gray',
      fontFamily: 'Inter',
      fontStyle: 'italic',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 10
   },
   cardText:{
      fontSize: 14,
      fontFamily: 'Inter',
      marginLeft: 20,
      marginRight: 20,
      marginBottom: 20
   },
   titles:{
      fontSize: 14,
      fontFamily: 'Inter-Bold',
      fontWeight: 'bold',
      marginLeft: 20,
      marginBottom: 5
   },
   information:{
      fontSize: 12,
      fontFamily: 'Inter',
      marginBottom: 5
   },
   imageConteiner:{
      width: '100%',
      height: '50%',
      alignItems: 'center'
   }
})

export default styles;