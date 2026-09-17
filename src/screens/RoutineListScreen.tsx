import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoutines, Routine } from '../context/RoutineContext';
import { useNavigation } from '@react-navigation/native';

export default function RoutineListScreen() {
  const { routines, deleteRoutine } = useRoutines();
  const navigation = useNavigation<any>();

  const handleDelete = (id: string, name: string) => {
    Alert.alert(
      'Eliminar Rutina',
      `¿Estás seguro de que deseas eliminar "${name}"?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive', 
          onPress: () => deleteRoutine(id) 
        },
      ]
    );
  };

  const renderItem = ({ item }: { item: Routine }) => (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.routineName}>{item.name}</Text>
        <Text style={styles.routineDetails}>Grupo: {item.muscleGroup}</Text>
        <Text style={styles.routineDetails}>Duración: {item.duration} mins</Text>
      </View>

      {/* Contenedor de los 3 íconos requeridos */}
      <View style={styles.actionsContainer}>
        {/* Ver Detalles (Ojo) */}
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('RoutineDetail', { id: item.id })}
        >
          <Ionicons name="eye-outline" size={22} color="#4CD964" />
        </TouchableOpacity>

        {/* Editar (Lápiz) */}
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('AddRoutine', { id: item.id })}
        >
          <Ionicons name="pencil-outline" size={22} color="#007AFF" />
        </TouchableOpacity>

        {/* Eliminar (Basurero) */}
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => handleDelete(item.id, item.name)}
        >
          <Ionicons name="trash-outline" size={22} color="#FF3B30" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={routines}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay rutinas registradas. ¡Crea una nueva!</Text>
        }
      />

      {/* Botón flotante (+) para ir al formulario de creación */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('AddRoutine')}
      >
        <Ionicons name="add" size={30} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2C2C2C',
  },
  infoContainer: {
    flex: 1,
  },
  routineName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  routineDetails: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 2,
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    padding: 8,
    marginLeft: 4,
  },
  emptyText: {
    color: '#888',
    textAlign: 'center',
    marginTop: 40,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#FF4500',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});