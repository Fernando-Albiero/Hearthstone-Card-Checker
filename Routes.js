import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './Screens/SplashScreen';

const Tab = createBottomTabNavigator();

export default function Routes() {
   return (
      <NavigationContainer>
         <Tab.Navigator>
            <Tab.Screen
               name="SplashScreen"
               component={SplashScreen}
            ></Tab.Screen>
         </Tab.Navigator>
      </NavigationContainer>
   );
}
