import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ProgressScreen from '../screens/ProgressScreen';
import RoutineListScreen from '../screens/RoutineListScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{ 
        headerShown: false, // Ocultamos la cabecera aquí para usar la del Drawer
        tabBarStyle: { backgroundColor: '#252932', borderTopWidth: 0, paddingBottom: 8, paddingTop: 8, height: 65 },
        tabBarActiveTintColor: '#FF7300',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen 
        name="Progreso" 
        component={ProgressScreen} 
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="stats-chart" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="Rutinas" 
        component={RoutineListScreen} 
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="barbell" size={size} color={color} /> }} 
      />
    </Tab.Navigator>
  );
}