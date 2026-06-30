import { userProgressMock } from '../mocks/user-progress.mock'
import { UserProgressCard } from './UserProgressCard'

export function UserProgress() {
  return (
    <section className="mx-auto w-full max-w-content pt-8">
      <div className="flex gap-5">
        {userProgressMock.map((category) => (
          <UserProgressCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
