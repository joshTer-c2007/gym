import { Text, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function ProgressScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <View style={styles.card}>
        <Ionicons name="flash" size={60} color="#FF7300" />
        <Text style={styles.title}>¡Nivel de Poder al Máximo!</Text>
        <Text style={styles.subtitle}>Tu progreso esta semana ha sido increíble. Sigue superando tus límites.</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>4</Text>
            <Text style={styles.statLabel}>Días</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>12h</Text>
            <Text style={styles.statLabel}>Tiempo</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#1A1D24', justifyContent: 'center', padding: 20 },
  card: { 
    backgroundColor: '#252932', 
    padding: 30, 
    borderRadius: 20, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8 
  },
  title: { color: '#FFF', fontSize: 22, fontWeight: '900', marginTop: 15, textAlign: 'center' },
  subtitle: { color: '#AAA', fontSize: 14, marginTop: 10, textAlign: 'center', marginBottom: 25 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  statBox: { 
    alignItems: 'center', 
    backgroundColor: '#1A1D24', 
    padding: 15, 
    borderRadius: 12, 
    width: '47%' 
  },
  statNumber: { color: '#FF7300', fontSize: 24, fontWeight: 'bold' },
  statLabel: { color: '#888', fontSize: 14, marginTop: 4 }
});