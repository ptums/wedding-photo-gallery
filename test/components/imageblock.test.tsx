import React from 'react'
import { render, screen } from '@testing-library/react'
import ImageBlock from '../../components/ImageBlock'

describe('ImageBlock component', () => {
  const props = {
    image: 'wedding/site/peterrachelattable_utqiyz.webp',
    altText: 'Rachel & Peter wedding',
    options: '/e_shadow:35,r_10/',
  }

  it('renders ImageBlock component', () => {
    render(<ImageBlock {...props} />)

    screen.debug()
  })

  it('renders proper ImageBlock props', () => {
    render(<ImageBlock {...props} />)

    expect(screen.getByAltText('Rachel & Peter wedding')).toBeDefined()
  })
})
