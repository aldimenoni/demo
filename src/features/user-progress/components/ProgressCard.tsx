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
      className="flex min-h-[300px] flex-col rounded-2xl border bg-white p-[25px] md:min-h-[184px]"
      style={{ borderColor: theme.borderColor }}
    >
      <header className="order-1 flex flex-col md:flex-row md:items-center md:gap-3 md:pb-4">
        <img
          src={theme.iconSrc}
          alt=""
          aria-hidden="true"
          className="size-7 shrink-0"
        />
        <div className="flex flex-col md:contents">
          <p className="pt-3 text-xs leading-4 font-medium text-[#667085] md:hidden">
            Práctica de:
          </p>
          <h3
            id={titleId}
            className="pt-1 text-[17px] leading-[22.1px] font-bold text-[#111827] md:pt-0 md:leading-[25.5px]"
          >
            {title}
          </h3>
        </div>
      </header>

      <div className="order-2 flex-1 md:order-3" />

      <div className="order-3 flex items-center justify-between pb-4 md:order-2">
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

      <button
        type="button"
        aria-label={`Practicar ${title}`}
        className="order-4 h-11 w-full rounded-full bg-[#00A59B] text-[15px] leading-[22.5px] font-semibold text-white shadow-[0_2px_4px_rgba(0,165,155,0.25)] transition-colors hover:bg-[#009489] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00A59B] md:h-[46px]"
      >
        <span className="md:hidden">Practicar</span>
        <span className="hidden md:inline">Ver ejercicios</span>
      </button>
    </article>
  )
}
