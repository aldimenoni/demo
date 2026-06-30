import { render, screen } from '@testing-library/react'
import { userProgressMock } from '../mocks/user-progress.mock'
import { UserProgressCard } from './UserProgressCard'

describe('UserProgressCard', () => {
  it('muestra nombre, progreso, botón e icono de la categoría', () => {
    const category = userProgressMock[0]

    render(<UserProgressCard category={category} />)

    expect(
      screen.getByRole('heading', { level: 3, name: category.categoryName }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(`${category.completedExercises} / ${category.totalExercises}`),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: category.buttonLabel })).toBeInTheDocument()
    expect(screen.getByRole('presentation')).toHaveAttribute('src', category.iconSrc)
  })
})
