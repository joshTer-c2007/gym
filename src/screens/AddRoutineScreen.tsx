import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useRoutines } from '../context/RoutineContext';

export default function AddRoutineScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation();
  const { addRoutine, updateRoutine, getRoutineById } = useRoutines();

  // Recibimos el parámetro 'id' si existe (indica modo edición)
  const routineId = route.params?.id;

  const [name, setName] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [duration, setDuration] = useState('');

  useEffect(() => {
    if (routineId) {
      const routineToEdit = getRoutineById(routineId);
      if (routineToEdit) {
        setName(routineToEdit.name);
        setMuscleGroup(routineToEdit.muscleGroup);
        setDuration(routineToEdit.duration.toString());
      }
    }
  }, [routineId]);

  const handleSave = () => {
    // Validar campos vacíos
    if (!name.trim() || !muscleGroup.trim() || !duration.trim()) {
      Alert.alert('Error', 'Por favor llena todos los campos.');
      return;
    }

    const parsedDuration = parseFloat(duration);
    if (isNaN(parsedDuration) || parsedDuration <= 0) {
      Alert.alert('Error', 'La duración debe ser un número válido.');
      return;
    }

    if (routineId) {
      // Modo Edición
      updateRoutine(routineId, name, muscleGroup, parsedDuration);
    } else {
      // Modo Creación
      addRoutine(name, muscleGroup, parsedDuration);
    }

    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>
        {routineId ? 'Editar Rutina' : 'Nueva Rutina'}
      </Text>

      <Text style={styles.label}>Nombre de la Rutina</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Pierna Completa"
        placeholderTextColor="#666"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Grupo Muscular</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: Cuádriceps / Pantorrilla"
        placeholderTextColor="#666"
        value={muscleGroup}
        onChangeText={setMuscleGroup}
      />

      <Text style={styles.label}>Duración (minutos)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ej: 50"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Guardar Rutina</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    color: '#AAA',
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#1E1E1E',
    borderWidth: 1,
    borderColor: '#2C2C2C',
    borderRadius: 8,
    color: '#FFF',
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
  },
  saveButton: {
    backgroundColor: '#FF4500',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});