import type { UserProgressCategory } from '../model/user-progress.types'

type UserProgressCardProps = Readonly<{
  category: UserProgressCategory
}>

export function UserProgressCard({ category }: UserProgressCardProps) {
  const { iconSrc, categoryName, completedExercises, totalExercises, buttonLabel } =
    category

  return (
    <article className="flex h-full min-h-[180px] min-w-0 flex-col justify-between rounded-2xl border border-border-card bg-white p-[25px] md:min-h-[184px] md:flex-1 md:justify-start">
      <header className="flex min-h-[45px] items-start gap-3 pb-4 md:min-h-0 md:items-center">
        <img
          src={iconSrc}
          alt=""
          className="mt-[8.5px] size-7 shrink-0 md:mt-0"
          width={28}
          height={28}
        />
        <h3 className="text-[17px] font-bold leading-[22.1px] text-text-primary md:leading-[25.5px]">
          {categoryName}
        </h3>
      </header>

      <div className="flex items-center justify-between pt-4 pb-0 md:pt-0 md:pb-4">
        <span className="text-sm font-normal leading-5 text-text-secondary">
          Ejercicios completados
        </span>
        <span className="text-sm font-semibold leading-5 text-text-primary">
          {completedExercises} / {totalExercises}
        </span>
      </div>

      <div className="hidden min-h-0 flex-1 md:block" aria-hidden="true" />

      <button
        type="button"
        className="flex h-11 w-full shrink-0 items-center justify-center rounded-full bg-action-primary text-[15px] font-semibold leading-[22.5px] text-white shadow-action md:h-[46px]"
      >
        {buttonLabel}
      </button>
    </article>
  )
}
