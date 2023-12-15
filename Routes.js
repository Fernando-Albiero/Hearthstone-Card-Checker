import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Screens/Welcome';
import SearchByName from './Screens/SearchByName';


const Tab = createBottomTabNavigator();

export default function Routes() {
   return (
      <NavigationContainer>
         <Tab.Navigator>
            <Tab.Screen
               options={{
                  headerShown: false
               }}
               name="Welcome"
               component={Welcome}
            />
            <Tab.Screen 
               options={{
                  headerShown: false,
                  tabBarIcon: () => 
                     <Image 
                        source={require('./assets/cardBack.png')} 
                        style={{width: 22, height: 33, resizeMode:'center'}}
                     />
                  
               }}
               name="SearchByName"
               component={SearchByName}
            />
         </Tab.Navigator>
      </NavigationContainer>
   );
}
