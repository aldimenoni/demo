import { categoryTheme } from '../constants/categoryTheme'
import type { UserProgressCategory } from '../types/userProgress.types'
import {
  formatExerciseProgress,
  getSafeProgressValues,
} from '../utils/formatExerciseProgress'

type ProgressCardProps = {
  category: UserProgressCategory
}

export default function ProgressCard({ category }: ProgressCardProps) {
  const { id, title, completedExercises, totalExercises } = category
  const theme = categoryTheme[id]
  const { safeCompleted, safeTotal, percentage } = getSafeProgressValues(
    completedExercises,
    totalExercises,
  )
  const progressLabel = formatExerciseProgress(
    completedExercises,
    totalExercises,
  )
  const titleId = `progress-title-${id}`

  return (
    <article
      aria-labelledby={titleId}
      className="flex min-h-[184px] flex-1 flex-col rounded-2xl border bg-white p-[25px]"
      style={{ borderColor: theme.borderColor }}
    >
      <header className="flex items-center gap-3 pb-4">
        <img
          src={theme.iconSrc}
          alt=""
          aria-hidden="true"
          className="size-7 shrink-0"
        />
        <h3
          id={titleId}
          className="text-[17px] leading-[25.5px] font-bold text-[#111827]"
        >
          {title}
        </h3>
      </header>

      <div className="flex items-center justify-between pb-4">
        <p className="text-sm leading-5 font-normal text-[#667085]">
          Ejercicios completados
        </p>
        <p
          className="text-sm leading-5 font-semibold text-[#111827]"
          aria-label={`${safeCompleted} de ${safeTotal} ejercicios completados`}
          aria-valuetext={`${percentage}% completado`}
        >
          {progressLabel}
        </p>
      </div>

      <div className="flex-1" />

      <button
        type="button"
        aria-label={`Ver ejercicios de ${title}`}
        className="h-[46px] w-full rounded-full bg-[#00A59B] text-[15px] leading-[22.5px] font-semibold text-white shadow-[0_2px_4px_rgba(0,165,155,0.25)] transition-colors hover:bg-[#009489] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A59B]"
      >
        Ver ejercicios
      </button>
    </article>
  )
}
