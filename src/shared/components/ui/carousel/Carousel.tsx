import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  useCallback,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from 'react'
import { CarouselContext } from './CarouselContext'

type CarouselProps = {
  readonly children: ReactNode
  readonly className?: string
  readonly options?: EmblaOptionsType
}

function subscribeToEmbla(
  emblaApi: NonNullable<ReturnType<typeof useEmblaCarousel>[1]>,
  onStoreChange: () => void,
) {
  emblaApi.on('select', onStoreChange)
  emblaApi.on('reInit', onStoreChange)

  return () => {
    emblaApi.off('select', onStoreChange)
    emblaApi.off('reInit', onStoreChange)
  }
}

export function Carousel({ children, className, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      if (!emblaApi) return () => undefined
      return subscribeToEmbla(emblaApi, onStoreChange)
    },
    [emblaApi],
  )

  const selectedIndex = useSyncExternalStore(
    subscribe,
    () => emblaApi?.selectedScrollSnap() ?? 0,
    () => 0,
  )

  const snapCount = useSyncExternalStore(
    subscribe,
    () => emblaApi?.scrollSnapList().length ?? 0,
    () => 0,
  )

  const contextValue = useMemo(
    () => ({ emblaRef, emblaApi, selectedIndex, snapCount }),
    [emblaRef, emblaApi, selectedIndex, snapCount],
  )

  return (
    <CarouselContext.Provider value={contextValue}>
      <div className={className} data-slot="carousel">
        {children}
      </div>
    </CarouselContext.Provider>
  )
}
