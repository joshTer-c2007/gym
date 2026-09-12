import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import SettingsScreen from '../screens/SettingsScreen';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: { backgroundColor: '#252932' }, // Gris moderno, no negro puro
        drawerActiveTintColor: '#FF7300', // Naranja vibrante
        drawerInactiveTintColor: '#E0E0E0',
        headerStyle: { backgroundColor: '#1A1D24', shadowColor: 'transparent', elevation: 0 },
        headerTintColor: '#FFF',
      }}
    >
      {/* Al quitar headerShown: false, recuperamos el botón de hamburguesa */}
      <Drawer.Screen 
        name="Mi Entrenamiento" 
        component={TabNavigator} 
        options={{ 
          drawerIcon: ({ color }) => <Ionicons name="fitness" size={22} color={color} /> 
        }} 
      />
      <Drawer.Screen 
        name="Configuración" 
        component={SettingsScreen} 
        options={{
          drawerIcon: ({ color }) => <Ionicons name="settings-outline" size={22} color={color} />
        }}
      />
    </Drawer.Navigator>
  );
}