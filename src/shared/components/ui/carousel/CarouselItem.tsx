import type { ReactNode } from 'react'

type CarouselItemProps = {
  readonly children: ReactNode
  readonly className?: string
}

export function CarouselItem({ children, className }: CarouselItemProps) {
  return (
    <div
      className={`min-w-0 shrink-0 ${className ?? ''}`}
      data-slot="carousel-item"
    >
      {children}
    </div>
  )
}
