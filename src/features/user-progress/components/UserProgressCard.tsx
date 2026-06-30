import type { UserProgressCategory } from '../model/user-progress.types'

type UserProgressCardProps = {
  readonly category: UserProgressCategory
}

export function UserProgressCard({ category }: UserProgressCardProps) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <header className="flex items-center gap-3">
        <img
          src={category.iconSrc}
          alt=""
          width={28}
          height={28}
          className="shrink-0"
          aria-hidden="true"
        />
        <h3 className="font-bold text-gray-900">{category.categoryName}</h3>
      </header>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-text-secondary">
          Ejercicios completados
        </span>
        <span className="text-sm text-gray-900">
          <span className="font-bold">{category.completedExercises}</span>
          {' / '}
          <span className="font-bold">{category.totalExercises}</span>
        </span>
      </div>

      <button
        type="button"
        className="mt-6 w-full rounded-full bg-action-primary py-3 text-sm font-semibold text-white"
      >
        {category.buttonLabel}
      </button>
    </article>
  )
}
