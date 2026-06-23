import iconProblemSolving from '../assets/icon-problem-solving.svg'
import iconReadingComprehension from '../assets/icon-reading-comprehension.svg'
import iconWriting from '../assets/icon-writing.svg'
import type { UserProgressCategoryId } from '../types/userProgress.types'

type CategoryTheme = {
  borderColor: string
  iconSrc: string
}

export const categoryTheme: Record<UserProgressCategoryId, CategoryTheme> = {
  'problem-solving': {
    borderColor: '#00AEE5',
    iconSrc: iconProblemSolving,
  },
  'reading-comprehension': {
    borderColor: '#FFBC00',
    iconSrc: iconReadingComprehension,
  },
  writing: {
    borderColor: '#E52B83',
    iconSrc: iconWriting,
  },
}
