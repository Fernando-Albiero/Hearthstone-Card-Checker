import {  Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/CustomModalStyle';

export default function CustomModal(props) {
   const [isModalVisible, setIsModalVisible] = useState(props.showModal);
   
   return (
      <Modal
         visible={ isModalVisible }
         dismiss= { () => setIsModalVisible(false) }
         animationType='fade'
         statusBarTranslucent={ false }
         transparent={ true }>
         <TouchableWithoutFeedback  onPress={ props.handleModal }>
               <View style={ styles.container }>
                  <TouchableWithoutFeedback>
                     <View
                        style={ styles.modal }>
                        <TouchableOpacity 
                           style={ styles.closeButton }
                           onPress={ props.handleModal}>
                           <AntDesign name="closecircleo" size={24} color="black" />
                        </TouchableOpacity>
                     
                        <Text style={ styles.text }>
                           <Text style={ styles.title }>{props.title + '\n\n'}</Text>
                              {props.text}
                        </Text>
                     </View>
                  </TouchableWithoutFeedback>
               </View>
         </TouchableWithoutFeedback>
      </Modal>
   ) 
}