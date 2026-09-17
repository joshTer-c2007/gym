import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Definición del tipo Routine según los requisitos
export interface Routine {
  id: string;
  name: string;
  muscleGroup: string;
  duration: number;
  createdAt: string;
}

// 2. Definición del tipo para el contexto
interface RoutineContextData {
  routines: Routine[];
  addRoutine: (name: string, muscleGroup: string, duration: number) => void;
  updateRoutine: (id: string, name: string, muscleGroup: string, duration: number) => void;
  deleteRoutine: (id: string) => void;
  getRoutineById: (id: string) => Routine | undefined;
}

const RoutineContext = createContext<RoutineContextData | undefined>(undefined);

export const RoutineProvider = ({ children }: { children: ReactNode }) => {
  // Arreglo inicial con una rutina por defecto
  const [routines, setRoutines] = useState<Routine[]>([
    {
      id: '1',
      name: 'Pecho y Tríceps',
      muscleGroup: 'Pecho / Tríceps',
      duration: 45,
      createdAt: new Date().toLocaleDateString(),
    },
  ]);

  // Función para agregar una rutina (autogenera ID y fecha)
  const addRoutine = (name: string, muscleGroup: string, duration: number) => {
    const newRoutine: Routine = {
      id: Date.now().toString(),
      name,
      muscleGroup,
      duration: Number(duration), // Asegura que sea número
      createdAt: new Date().toLocaleDateString(),
    };
    setRoutines((prev) => [...prev, newRoutine]);
  };

  // Función para actualizar una rutina existente
  const updateRoutine = (id: string, name: string, muscleGroup: string, duration: number) => {
    setRoutines((prev) =>
      prev.map((routine) =>
        routine.id === id
          ? { ...routine, name, muscleGroup, duration: Number(duration) }
          : routine
      )
    );
  };

  // Función para eliminar una rutina por su ID
  const deleteRoutine = (id: string) => {
    setRoutines((prev) => prev.filter((routine) => routine.id !== id));
  };

  // Función auxiliar para buscar una rutina específica (útil para el detalle y edición)
  const getRoutineById = (id: string) => {
    return routines.find((routine) => routine.id === id);
  };

  return (
    <RoutineContext.Provider
      value={{ routines, addRoutine, updateRoutine, deleteRoutine, getRoutineById }}
    >
      {children}
    </RoutineContext.Provider>
  );
};

// Hook personalizado para consumir el contexto fácilmente
export const useRoutines = () => {
  const context = useContext(RoutineContext);
  if (!context) {
    throw new Error('useRoutines debe ser usado dentro de un RoutineProvider');
  }
  return context;
};