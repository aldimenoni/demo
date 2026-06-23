import ProgressCard from './ProgressCard'
import { userProgressMock } from '../mocks/userProgress.mock'

export default function UserProgressSection() {
  return (
    <section aria-label="Progreso del usuario" className="pt-8">
      <ul className="flex list-none gap-5">
        {userProgressMock.map((category) => (
          <li key={category.id} className="min-w-0 flex-1">
            <ProgressCard category={category} />
          </li>
        ))}
      </ul>
    </section>
  )
}
