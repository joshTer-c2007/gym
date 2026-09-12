import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function RoutineListScreen() {
  const navigation = useNavigation<any>();
  
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <Text style={styles.headerTitle}>Tus Rutinas</Text>
      
      <TouchableOpacity 
        style={styles.workoutCard}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('ChestDetail')}
      >
        <View style={styles.iconContainer}>
          <Ionicons name="body" size={30} color="#FF7300" />
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Día 1: Pecho y Tríceps</Text>
          <Text style={styles.cardSubtitle}>Hipertrofia • 6 Ejercicios</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color="#888" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#1A1D24', paddingHorizontal: 20 },
  headerTitle: { color: '#FFF', fontSize: 28, fontWeight: '900', marginVertical: 20 },
  workoutCard: { 
    backgroundColor: '#252932', 
    padding: 15, 
    borderRadius: 16, 
    flexDirection: 'row', 
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5
  },
  iconContainer: {
    backgroundColor: 'rgba(255, 115, 0, 0.15)', 
    padding: 12,
    borderRadius: 12,
    marginRight: 15
  },
  cardContent: { flex: 1 },
  cardTitle: { color: '#FFF', fontSize: 17, fontWeight: 'bold' },
  cardSubtitle: { color: '#AAA', fontSize: 13, marginTop: 4 }
});