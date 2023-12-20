import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screens/Welcome';
import CardInformation from './Screens/CardInformation';
import SwiperComponent from './Components/SwiperComponent';

const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();

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

/*
function BottomNavigator(){
   return (
      <Tab.Navigator 
         backBehavior='history'
         screenOptions={{
            tabBarStyle:{
               backgroundColor: '#614326',
               height: 100,
               paddingBottom: 10,
               marginBottom: Platform.OS === 'ios' ? 30 : 0
            },
            tabBarInactiveTintColor: 'white',
            tabBarLabelStyle: {
               fontSize: 14,
            }
         }}
         >
         <Tab.Screen 
            options={{
               headerShown: false,
               tabBarIcon: () => 
                  <Image 
                     source={require('./assets/cardBack.png')} 
                     style={{width: 50, height: 50, resizeMode:'contain'}}
                  />
               }}
               name="By Name"
               component={ SearchByName }
         />
         <Tab.Screen 
            options={{
               headerShown: false,
               //unmountOnBlur: true,
               tabBarIcon: () => 
                  <Image 
                     source={require('./assets/deck.png')} 
                     style={{width: 60, height: 60, resizeMode:'contain'}}
                  />
               }}
               name="By Deck"
               component={ SearchByDeck }
         />
         <Tab.Screen 
            options={{
               headerShown: false,
               tabBarIcon: () => 
                  <Image 
                     source={require('./assets/selected-hexagon.png')} 
                     style={{width: 50, height: 50, resizeMode:'contain'}}
                  />
               }}
               name="By Mana"
               component={ SearchByMana }
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
            component={ CardInformation }
         />
      </Tab.Navigator>
   );
}
*/