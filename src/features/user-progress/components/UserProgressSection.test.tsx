import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import UserProgressSection from './UserProgressSection'

describe('UserProgressSection', () => {
  it('renders the three mock categories', () => {
    render(<UserProgressSection />)

    expect(
      screen.getByRole('heading', { name: 'Resolución de problemas' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Comprensión lectora' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Escritura' }),
    ).toBeInTheDocument()
  })

  it('renders the title and completed/total progress for each card', () => {
    render(<UserProgressSection />)

    expect(screen.getByText('5 / 11')).toBeInTheDocument()
    expect(screen.getByText('1 / 5')).toBeInTheDocument()
    expect(screen.getByText('1 / 1')).toBeInTheDocument()
  })

  it('renders safely when categories is an empty list', () => {
    render(<UserProgressSection categories={[]} />)

    expect(
      screen.getByRole('region', { name: 'Progreso del usuario' }),
    ).toBeInTheDocument()
    expect(screen.queryAllByRole('heading', { level: 3 })).toHaveLength(0)
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it('locates buttons by accessible name and allows interaction', async () => {
    const user = userEvent.setup()

    render(<UserProgressSection />)

    const problemSolvingButton = screen.getByRole('button', {
      name: 'Practicar Resolución de problemas',
    })
    const readingButton = screen.getByRole('button', {
      name: 'Practicar Comprensión lectora',
    })
    const writingButton = screen.getByRole('button', {
      name: 'Practicar Escritura',
    })

    expect(problemSolvingButton).toBeInTheDocument()
    expect(readingButton).toBeInTheDocument()
    expect(writingButton).toBeInTheDocument()

    await user.click(problemSolvingButton)
  })
})
