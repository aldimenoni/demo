import type { UserProgressCategory } from '../model/user-progress.types'

export const userProgressMock: UserProgressCategory[] = [
  {
    id: 'problem-solving',
    iconSrc: '/assets/problem-solving-icon.svg',
    categoryName: 'Resolución de problemas',
    completedExercises: 5,
    totalExercises: 11,
    buttonLabel: 'Ver ejercicios',
  },
  {
    id: 'reading',
    iconSrc: '/assets/reading-icon.svg',
    categoryName: 'Comprensión lectora',
    completedExercises: 1,
    totalExercises: 5,
    buttonLabel: 'Ver ejercicios',
  },
  {
    id: 'writing',
    iconSrc: '/assets/writing-icon.svg',
    categoryName: 'Escritura',
    completedExercises: 1,
    totalExercises: 1,
    buttonLabel: 'Ver ejercicios',
  },
]
