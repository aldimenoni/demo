import { render, screen } from '@testing-library/react'
import { userProgressMock } from '../mocks/user-progress.mock'
import { UserProgress } from './UserProgress'

describe('UserProgress', () => {
  it('muestra el título de la sección y las categorías del mock', () => {
    render(<UserProgress />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Ejercicios de práctica:' }),
    ).toBeInTheDocument()

    const categoryHeadings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    for (const { categoryName } of userProgressMock) {
      expect(categoryHeadings).toContain(categoryName)
    }
  })
})
