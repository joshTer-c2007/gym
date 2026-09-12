import 'react-native-gesture-handler'; // Obligatorio en la línea 1
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importaciones de tus archivos
import DrawerNavigator from './src/navigators/DrawerNavigator';
import ChestDetailScreen from './src/screens/ChestDetailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
          {/* Nivel 1 (Drawer) como pantalla inicial del Stack */}
          <Stack.Screen 
            name="DrawerRoot" 
            component={DrawerNavigator} 
            options={{ headerShown: false }} 
          />
          
          {/* Nivel 3 (Stack apilado) Vista de detalles */}
          <Stack.Screen 
            name="ChestDetail" 
            component={ChestDetailScreen} 
            options={{ 
              title: 'Rutina de Pecho',
              headerStyle: { backgroundColor: '#121212' },
              headerTintColor: '#FF4500', // Flecha naranja
              headerTitleStyle: { color: '#FFF' }
            }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}