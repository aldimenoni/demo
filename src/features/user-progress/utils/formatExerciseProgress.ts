export function formatExerciseProgress(
  completed: number,
  total: number,
): string {
  const safeTotal = Math.max(0, total)
  const safeCompleted = Math.min(Math.max(0, completed), safeTotal)

  return `${safeCompleted} / ${safeTotal}`
}

export function getProgressPercentage(
  completed: number,
  total: number,
): number {
  if (total <= 0) return 0

  const safeCompleted = Math.min(Math.max(0, completed), total)

  return Math.round((safeCompleted / total) * 100)
}

export function getSafeProgressValues(completed: number, total: number) {
  const safeTotal = Math.max(0, total)
  const safeCompleted = Math.min(Math.max(0, completed), safeTotal)
  const percentage = getProgressPercentage(completed, total)

  return { safeCompleted, safeTotal, percentage }
}
