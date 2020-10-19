import React from 'react'
import { render, screen } from '@testing-library/react'
import GalleryLink from '../../components/GalleryLink'

describe('GalleryLink component', () => {
  it('renders GalleryLink component', () => {
    render(<GalleryLink />)

    screen.debug()
  })

  it('renders proper GalleryLink content', () => {
    render(<GalleryLink />)

    expect(
      screen.getByText(/Now I know what you are really here for.../)
    ).toBeDefined()
    expect(screen.getByText(/Pictures!/)).toBeDefined()
    expect(
      screen.getByText(/Here's a link to our wedding photo album, enjoy./)
    ).toBeDefined()
  })
})
