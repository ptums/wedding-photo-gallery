import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonLink from '../../components/ButtonLink'

describe('ButtonLink component', () => {
  it('renders ButtonLink component', () => {
    render(<ButtonLink />)

    screen.debug()
  })

  it('renders proper ButtonLink props', () => {
    render(<ButtonLink />)

    expect(screen.getByText(/Photo Album/)).toBeDefined()
  })

  it('renders /wedding-gallery', () => {
    render(<ButtonLink />)

    expect(screen.getByText(/Photo Album/).closest('a')).toBeDefined()
  })
})
