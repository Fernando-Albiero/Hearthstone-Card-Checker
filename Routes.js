import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screens/Welcome';
import CardInformation from './Screens/CardInformation';
import SwiperComponent from './Components/SwiperComponent';

const Stack = createStackNavigator();

export default function Routes() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name='Welcome' 
               component={ Welcome }
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name='Swiper' 
               component={ SwiperComponent }
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name='CardInformation' 
               component={ CardInformation }
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}