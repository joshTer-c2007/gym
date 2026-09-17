import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoutineProvider } from './src/context/RoutineContext';

import DrawerNavigator from './src/navigators/DrawerNavigator';
import RoutineDetailScreen from './src/screens/RoutineDetailScreen';
import AddRoutineScreen from './src/screens/AddRoutineScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <RoutineProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer theme={DarkTheme}>
          <Stack.Navigator>
            {/* Pantalla principal (Drawer con Tabs y Listado) */}
            <Stack.Screen
              name="DrawerRoot"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            
            {/* Pantalla de Detalles Dinámica (Paso 4) */}
            <Stack.Screen
              name="RoutineDetail"
              component={RoutineDetailScreen}
              options={{
                title: 'Detalle de Rutina',
                headerStyle: { backgroundColor: '#121212' },
                headerTintColor: '#FF4500',
                headerTitleStyle: { color: '#FFF' },
              }}
            />

            {/* Pantalla del Formulario Inteligente Crear/Editar (Paso 3) */}
            <Stack.Screen
              name="AddRoutine"
              component={AddRoutineScreen}
              options={{
                title: 'Gestión de Rutina',
                headerStyle: { backgroundColor: '#121212' },
                headerTintColor: '#FF4500',
                headerTitleStyle: { color: '#FFF' },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </RoutineProvider>
  );
}