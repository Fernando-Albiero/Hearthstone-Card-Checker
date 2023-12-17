import 'react-native-gesture-handler';
import Routes from './Routes';
import { useFonts } from 'expo-font';

let customFonts = {
   'BelweBoldBT': require('./assets/fonts/BelweBoldBT.ttf'),
   'IBMPlexMono' : require('./assets/fonts/IBMPlexMono-Regular.ttf'),
   'IBMPlexMono-Bold': require("./assets/fonts/IBMPlexMono-Bold.ttf"),
   'Inter' : require('./assets/fonts/Inter-Regular.ttf'),
   'Inter-Bold' : require('./assets/fonts/Inter-Bold.ttf'),
   'Uncial-Caps': require('./assets/fonts/LHF-Uncial-Caps-Regular.ttf')
 };

export default function App() {
   const [isLoaded] = useFonts(customFonts);

   if(isLoaded)
      return <Routes />;
}
