import { useCarouselContext } from './use-carousel-context'

type CarouselDotsProps = Readonly<{
  className?: string
}>

export function CarouselDots({ className }: CarouselDotsProps) {
  const { selectedIndex, scrollSnaps, scrollTo } = useCarouselContext()

  if (scrollSnaps.length <= 1) return null

  return (
    <div
      className={`flex justify-center gap-2 pt-4 ${className ?? ''}`}
      role="tablist"
      aria-label="Navegación del carrusel"
    >
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          aria-selected={selectedIndex === index}
          aria-label={`Ir a la diapositiva ${index + 1}`}
          className={`size-2.5 rounded-full transition-colors ${
            selectedIndex === index ? 'bg-action-primary' : 'bg-border-card'
          }`}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  )
}
