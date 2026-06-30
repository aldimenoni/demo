import type { EmblaCarouselType } from 'embla-carousel'
import { createContext, useContext } from 'react'

export type CarouselContextValue = {
  emblaRef: (node: HTMLElement | null) => void
  emblaApi: EmblaCarouselType | undefined
  selectedIndex: number
  scrollSnaps: number[]
  scrollTo: (index: number) => void
  isDragging: boolean
}

export const CarouselContext = createContext<CarouselContextValue | null>(null)

export function useCarouselContext() {
  const context = useContext(CarouselContext)
  if (!context) {
    throw new Error('useCarouselContext must be used within a Carousel')
  }
  return context
}
