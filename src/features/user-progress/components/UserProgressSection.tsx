import { useCallback, useRef, useState } from 'react'
import ProgressCard from './ProgressCard'
import { userProgressMock } from '../mocks/userProgress.mock'

const MOBILE_CARD_WIDTH = 264
const MOBILE_CARD_GAP = 16

export default function UserProgressSection() {
  const carouselRef = useRef<HTMLUListElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const index = Math.round(
      carousel.scrollLeft / (MOBILE_CARD_WIDTH + MOBILE_CARD_GAP),
    )

    setActiveIndex(Math.min(Math.max(index, 0), userProgressMock.length - 1))
  }, [])

  return (
    <section
      aria-label="Progreso del usuario"
      aria-roledescription="carrusel"
      className="pt-8 md:aria-roledescription-none"
    >
      <h2 className="text-[17px] leading-[25.5px] font-bold text-[#111827] md:hidden">
        Ejercicios de práctica:
      </h2>

      <ul
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex list-none snap-x snap-mandatory gap-4 overflow-x-auto pt-4 pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:snap-none md:gap-5 md:overflow-visible md:pt-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
      >
        {userProgressMock.map((category) => (
          <li
            key={category.id}
            className="w-[264px] shrink-0 snap-start md:w-auto md:min-w-0 md:flex-1 md:shrink md:snap-align-none"
          >
            <ProgressCard category={category} />
          </li>
        ))}
        <li aria-hidden="true" className="w-6 shrink-0 md:hidden" />
      </ul>

      <div
        className="flex justify-center gap-2 pt-4 md:hidden"
        role="tablist"
        aria-label="Paginación del carrusel"
      >
        {userProgressMock.map((category, index) => (
          <span
            key={category.id}
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`Tarjeta ${index + 1} de ${userProgressMock.length}`}
            className={`size-2.5 rounded-full ${
              activeIndex === index ? 'bg-[#00A59B]' : 'bg-[#D7DADD]'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
