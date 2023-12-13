import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchByName from './Screens/SearchByName';

const Tab = createBottomTabNavigator();

export default function Routes() {
   return (
      <NavigationContainer>
         <Tab.Navigator>
            <Tab.Screen
               name="SearchByName"
               component={SearchByName}
            ></Tab.Screen>
         </Tab.Navigator>
      </NavigationContainer>
   );
}
