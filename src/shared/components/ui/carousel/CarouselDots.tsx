import { useCallback } from 'react'
import { useCarousel } from './CarouselContext'

type CarouselDotsProps = {
  readonly className?: string
}

export function CarouselDots({ className }: CarouselDotsProps) {
  const { emblaApi, selectedIndex, snapCount } = useCarousel()

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  if (snapCount <= 1) return null

  return (
    <div
      className={`flex items-center justify-center gap-2 ${className ?? ''}`}
      data-slot="carousel-dots"
    >
      {Array.from({ length: snapCount }, (_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Ir a la diapositiva ${index + 1}`}
          aria-current={selectedIndex === index ? 'true' : undefined}
          onClick={() => scrollTo(index)}
          className={`size-2 rounded-full transition-colors ${
            selectedIndex === index
              ? 'bg-button-primary'
              : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  )
}
