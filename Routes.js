import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardInformation from './Screens/CardInformation';
import SwiperComponent from './Components/SwiperComponent';
import Welcome from './Screens/Welcome';
import SplashScreen from './Screens/SplashScreen';

const Stack = createStackNavigator();

export default function Routes() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               options={{
                  headerShown: false,
               }}
               name='Splash' 
               component={ SplashScreen }
            />
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