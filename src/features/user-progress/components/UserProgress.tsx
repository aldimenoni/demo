import {
  Carousel,
  CarouselContainer,
  CarouselDots,
  CarouselSlide,
  CarouselViewport,
} from '../../../shared/components/ui/carousel'
import { userProgressMock } from '../mocks/user-progress.mock'
import { UserProgressCard } from './UserProgressCard'

export function UserProgress() {
  return (
    <section className="mx-auto w-full max-w-content pt-8">
      <div className="hidden gap-5 md:flex">
        {userProgressMock.map((category) => (
          <UserProgressCard key={category.id} category={category} />
        ))}
      </div>

      <div className="md:hidden">
        <h2 className="text-[17px] font-bold leading-[25.5px] text-text-primary">
          Ejercicios de práctica:
        </h2>

        <Carousel
          className="pt-4"
          options={{ align: 'start', containScroll: 'trimSnaps' }}
        >
          <CarouselViewport className="pb-1">
            <CarouselContainer className="gap-4">
              {userProgressMock.map((category) => (
                <CarouselSlide key={category.id} className="w-[264px]">
                  <UserProgressCard category={category} />
                </CarouselSlide>
              ))}
              <div className="min-w-6 shrink-0" aria-hidden="true" />
            </CarouselContainer>
          </CarouselViewport>
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  )
}
