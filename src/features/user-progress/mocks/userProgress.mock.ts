import type { UserProgressCategory } from '../types/userProgress.types'

export const userProgressMock: UserProgressCategory[] = [
  {
    id: 'problem-solving',
    title: 'Resolución de problemas',
    completedExercises: 5,
    totalExercises: 11,
    iconName: 'puzzle',
  },
  {
    id: 'reading-comprehension',
    title: 'Comprensión lectora',
    completedExercises: 1,
    totalExercises: 5,
    iconName: 'book-open',
  },
  {
    id: 'writing',
    title: 'Escritura',
    completedExercises: 1,
    totalExercises: 1,
    iconName: 'pen-line',
  },
]
