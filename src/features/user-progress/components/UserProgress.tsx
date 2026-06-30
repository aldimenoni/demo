import { userProgressMock } from '../mocks/user-progress.mock'
import { UserProgressCard } from './UserProgressCard'

export function UserProgress() {
  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-3 gap-6 font-sans">
      {userProgressMock.map((category) => (
        <UserProgressCard key={category.id} category={category} />
      ))}
    </section>
  )
}
