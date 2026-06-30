import type { UserProgressCategory } from '../model/user-progress.types'

type UserProgressCardProps = {
  readonly category: UserProgressCategory
}

export function UserProgressCard({ category }: UserProgressCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <header className="mb-6 flex items-start gap-3">
        <img
          src={category.iconSrc}
          alt=""
          width={28}
          height={28}
          className="size-7 shrink-0"
        />
        <h2 className="line-clamp-2 min-h-10 text-base leading-5 font-semibold text-text-primary">
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
        className="mt-auto w-full rounded-full bg-button-primary py-3 text-sm font-semibold text-white"
      >
        {category.buttonLabel}
      </button>
    </article>
  )
}
