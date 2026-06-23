export type UserProgressCategoryId =
  | 'problem-solving'
  | 'reading-comprehension'
  | 'writing'

export type UserProgressCategory = {
  id: UserProgressCategoryId
  title: string
  completedExercises: number
  totalExercises: number
  iconName: string
}
