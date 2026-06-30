import type { UserProgressCategory } from '../model/user-progress.types'

type UserProgressCardProps = {
  readonly category: UserProgressCategory
}

export function UserProgressCard({ category }: UserProgressCardProps) {
  return (
    <article className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <header className="mb-6 flex items-center gap-3">
        <img
          src={category.iconSrc}
          alt=""
          width={28}
          height={28}
          className="size-7 shrink-0"
        />
        <h2 className="text-base font-semibold text-text-primary">
          {category.categoryName}
        </h2>
      </header>

      <div className="mb-6 flex items-center justify-between gap-4">
        <span className="text-sm text-text-secondary">
          Ejercicios completados
        </span>
        <span className="text-sm font-semibold text-text-primary">
          {category.completedExercises} / {category.totalExercises}
        </span>
      </div>

      <button
        type="button"
        className="w-full rounded-full bg-button-primary py-3 text-sm font-semibold text-white"
      >
        {category.buttonLabel}
      </button>
    </article>
  )
}
