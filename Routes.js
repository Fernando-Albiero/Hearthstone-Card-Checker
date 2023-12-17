import React from 'react';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Screens/Welcome';
import SearchByName from './Screens/SearchByName';
import CardInformation from './Screens/CardInformation';
import SearchByDeck from './Screens/SearchByDeck';
import SearchByMana from './Screens/SearchByMana';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BottomNavigator(){
   return (
      <Tab.Navigator backBehavior='history'>
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
         <Tab.Screen 
            options={{
               headerShown: false,
               //unmountOnBlur: true,
               tabBarIcon: () => 
                  <Image 
                     source={require('./assets/deck.png')} 
                     style={{width: 34, height: 33, resizeMode:'contain'}}
                  />
               }}
               name="SearchByDeck"
               component={SearchByDeck}
         />
         <Tab.Screen 
            options={{
               headerShown: false,
               unmountOnBlur: true,
               tabBarIcon: () => 
                  <Image 
                     source={require('./assets/selected-hexagon.png')} 
                     style={{width: 34, height: 33, resizeMode:'contain'}}
                  />
               }}
               name="SearchByMana"
               component={SearchByMana}
         />
         <Tab.Screen
            options={{
               headerShown: false,
               tabBarStyle: {
                  display: 'none'
               },
               tabBarButton: () => null
            }}
            name='CardInformation'
            component={CardInformation}
         />
      </Tab.Navigator>
   );
}

export default function Routes() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name='Welcome' 
               component={Welcome}
            />
            <Stack.Screen
               options={{
                  headerShown: false
               }}
               name='BottomNavigator' 
               component={BottomNavigator}/>
         </Stack.Navigator>
      </NavigationContainer>
   );
}
