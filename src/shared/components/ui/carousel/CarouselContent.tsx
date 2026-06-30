import { useEffect, useRef, type ReactNode } from 'react'
import { useCarousel } from './CarouselContext'

type CarouselContentProps = {
  readonly children: ReactNode
  readonly className?: string
  readonly gapClassName?: string
}

export function CarouselContent({
  children,
  className,
  gapClassName = 'gap-3',
}: CarouselContentProps) {
  const { emblaRef, emblaApi } = useCarousel()
  const viewportRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!emblaApi || !viewportRef.current) return

    const viewport = viewportRef.current

    const onPointerDown = () => {
      viewport.classList.add('cursor-grabbing')
      viewport.classList.remove('cursor-grab')
    }

    const onPointerUp = () => {
      viewport.classList.remove('cursor-grabbing')
      viewport.classList.add('cursor-grab')
    }

    emblaApi.on('pointerDown', onPointerDown)
    emblaApi.on('pointerUp', onPointerUp)

    return () => {
      emblaApi.off('pointerDown', onPointerDown)
      emblaApi.off('pointerUp', onPointerUp)
    }
  }, [emblaApi])

  return (
    <div
      ref={(node) => {
        emblaRef(node)
        viewportRef.current = node
      }}
      className={`cursor-grab touch-pan-y overflow-hidden ${className ?? ''}`}
      data-slot="carousel-content"
    >
      <div
        className={`flex items-stretch ${gapClassName}`}
        data-slot="carousel-track"
      >
        {children}
      </div>
    </div>
  )
}
