import {  Button, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import styles from '../Styles/SearchByNameStyle';

export default function CustomModal(props) {
   const [isModalVisible, setIsModalVisible] = useState(props.showModal);
   
   return (
      <Modal
         visible={ isModalVisible }
         dismiss= { () => setIsModalVisible(false) }
         animationType='fade'
         statusBarTranslucent={ false }
         transparent={ true }
      >
         <TouchableWithoutFeedback  onPress={ () => props.handleModal(0) }>
               <View style={{ flex: 1, width: '100%', height: '100%'}}>
                  <TouchableWithoutFeedback>
                     <View
                        style={ styles.modal }>
                        <TouchableOpacity 
                           style={{ alignSelf: 'flex-end', marginBottom: 10 }}
                           onPress={ () => props.handleModal(0) }>
                           <AntDesign name="closecircleo" size={24} color="black" />
                        </TouchableOpacity>
                     
                        <Text style={{ fontFamily: 'IBMPlexMono' }}>
                           <Text style={{ fontSize: 16, fontFamily: 'IBMPlexMono-Bold'}}>{props.title}</Text>
                              {props.text}
                        </Text>
                     </View>
                  </TouchableWithoutFeedback>
               </View>
         </TouchableWithoutFeedback>
      </Modal>
   )
  
}