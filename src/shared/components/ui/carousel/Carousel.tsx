import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { CarouselContext, type CarouselContextValue, useCarouselContext } from './use-carousel-context'

type CarouselProps = Readonly<{
  children: ReactNode
  className?: string
  options?: EmblaOptionsType
}>

export function Carousel({ children, className, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    const onReInit = () => {
      setScrollSnaps(emblaApi.scrollSnapList())
      onSelect()
    }

    const onPointerDown = () => setIsDragging(true)
    const onPointerUp = () => setIsDragging(false)

    onReInit()
    emblaApi.on('reInit', onReInit)
    emblaApi.on('select', onSelect)
    emblaApi.on('pointerDown', onPointerDown)
    emblaApi.on('pointerUp', onPointerUp)

    return () => {
      emblaApi.off('reInit', onReInit)
      emblaApi.off('select', onSelect)
      emblaApi.off('pointerDown', onPointerDown)
      emblaApi.off('pointerUp', onPointerUp)
    }
  }, [emblaApi])

  const value: CarouselContextValue = {
    emblaRef,
    emblaApi,
    selectedIndex,
    scrollSnaps,
    scrollTo,
    isDragging,
  }

  return (
    <CarouselContext.Provider value={value}>
      <div className={className}>{children}</div>
    </CarouselContext.Provider>
  )
}

type CarouselElementProps = Readonly<{
  children: ReactNode
  className?: string
}>

export function CarouselViewport({ children, className }: CarouselElementProps) {
  const { emblaRef, isDragging } = useCarouselContext()

  return (
    <div
      ref={emblaRef}
      className={`overflow-hidden [touch-action:pan-y_pinch-zoom] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} ${className ?? ''}`}
    >
      {children}
    </div>
  )
}

export function CarouselContainer({ children, className }: CarouselElementProps) {
  return <div className={`flex ${className ?? ''}`}>{children}</div>
}

export function CarouselSlide({ children, className }: CarouselElementProps) {
  return <div className={`min-w-0 shrink-0 ${className ?? ''}`}>{children}</div>
}
