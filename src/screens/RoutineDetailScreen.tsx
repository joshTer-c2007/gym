import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useRoutines } from '../context/RoutineContext';

export default function RoutineDetailScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { getRoutineById } = useRoutines();

  // Obtenemos el ID que se pasó por parámetros desde la lista
  const routineId = route.params?.id;
  const routine = getRoutineById(routineId);

  if (!routine) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No se encontró la información de la rutina.</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Ionicons name="fitness-outline" size={32} color="#FF4500" />
          <Text style={styles.title}>{routine.name}</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.label}>Grupo Muscular:</Text>
          <Text style={styles.value}>{routine.muscleGroup}</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Duración Estimada:</Text>
          <Text style={styles.value}>{routine.duration} minutos</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Creado el:</Text>
          <Text style={styles.value}>{routine.createdAt}</Text>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.editButton} 
        onPress={() => navigation.navigate('AddRoutine', { id: routine.id })}
      >
        <Ionicons name="pencil" size={20} color="#FFF" style={{ marginRight: 8 }} />
        <Text style={styles.editButtonText}>Editar esta Rutina</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: '#2C2C2C',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: '#2C2C2C',
    marginBottom: 20,
  },
  infoRow: {
    marginBottom: 16,
  },
  label: {
    color: '#888',
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '500',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginTop: 24,
  },
  editButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});