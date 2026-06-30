import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '../../../shared/components/ui/carousel'
import { userProgressMock } from '../mocks/user-progress.mock'
import { UserProgressCard } from './UserProgressCard'

export function UserProgress() {
  return (
    <section className="mx-auto max-w-[1200px] font-sans">
      <div className="md:hidden">
        <h2 className="mb-4 text-base font-semibold text-text-primary">
          Ejercicios de práctica:
        </h2>

        <Carousel>
          <CarouselContent>
            {userProgressMock.map((category) => (
              <CarouselItem
                key={category.id}
                className="flex-[0_0_85%]"
              >
                <UserProgressCard category={category} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselDots className="mt-4" />
        </Carousel>
      </div>

      <div className="hidden grid-cols-3 gap-6 md:grid">
        {userProgressMock.map((category) => (
          <UserProgressCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}
