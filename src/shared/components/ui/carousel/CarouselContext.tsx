import { createContext, useContext } from 'react'
import type { EmblaCarouselType } from 'embla-carousel'
import type { EmblaViewportRefType } from 'embla-carousel-react'

type CarouselContextValue = {
  readonly emblaRef: EmblaViewportRefType
  readonly emblaApi: EmblaCarouselType | undefined
  readonly selectedIndex: number
  readonly snapCount: number
}

export const CarouselContext = createContext<CarouselContextValue | null>(null)

export function useCarousel() {
  const context = useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a Carousel')
  }

  return context
}
