import { Text, StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ChestDetailScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Cabecera de la rutina */}
        <View style={styles.header}>
          <Ionicons name="barbell" size={50} color="#FF7300" />
          <Text style={styles.title}>Rutina de Pecho y Tríceps</Text>
          <Text style={styles.subtitle}>Enfoque: Hipertrofia y Fuerza</Text>
        </View>

        {/* Lista de Ejercicios */}
        <View style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>1. Press de Banca Plano</Text>
          <Text style={styles.exerciseDetails}>4 series x 8-10 repeticiones</Text>
        </View>

        <View style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>2. Press Inclinado con Mancuernas</Text>
          <Text style={styles.exerciseDetails}>3 series x 10-12 repeticiones</Text>
        </View>

        <View style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>3. Cruces en Polea</Text>
          <Text style={styles.exerciseDetails}>4 series x 15 repeticiones</Text>
        </View>

        <View style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>4. Extensión de Tríceps en Polea</Text>
          <Text style={styles.exerciseDetails}>3 series x 12-15 repeticiones</Text>
        </View>

        <View style={styles.exerciseCard}>
          <Text style={styles.exerciseName}>5. Fondos en Paralelas (Dips)</Text>
          <Text style={styles.exerciseDetails}>3 series x Al fallo</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#1A1D24', // El nuevo fondo gris oscuro
    paddingHorizontal: 20 
  },
  header: { 
    alignItems: 'center', 
    marginVertical: 30 
  },
  title: { 
    color: '#FFF', 
    fontSize: 24, 
    fontWeight: '900', 
    marginTop: 15, 
    textAlign: 'center' 
  },
  subtitle: { 
    color: '#AAA', 
    fontSize: 14, 
    marginTop: 5 
  },
  exerciseCard: { 
    backgroundColor: '#252932', 
    padding: 20, 
    borderRadius: 16, 
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#FF7300', // Borde naranja lateral
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4
  },
  exerciseName: { 
    color: '#FFF', 
    fontSize: 17, 
    fontWeight: 'bold' 
  },
  exerciseDetails: { 
    color: '#888', 
    fontSize: 14, 
    marginTop: 8 
  }
});