import React from 'react'
import { render, screen } from '@testing-library/react'
import ImageContainer from '../../components/ImageBlock'

describe('ImageContainer component', () => {
  const props = {
    image: 'wedding/site/peterrachelattable_utqiyz.webp',
    altText: 'Rachel & Peter wedding',
    options: '/e_shadow:35,r_10/',
  }

  it('renders ImageContainer component', () => {
    render(<ImageContainer {...props} />)

    screen.debug()
  })

  it('renders proper ImageContainer props', () => {
    render(<ImageContainer {...props} />)

    expect(screen.getByAltText('Rachel & Peter wedding')).toBeDefined()
  })
})
