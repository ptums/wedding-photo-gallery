import React from 'react'
import { render, screen } from '@testing-library/react'
import ImageBlock from '../../components/ImageBlock'

describe('ImageBlock component', () => {
  const props = {
    image: 'wedding/site/peterrachelattable_utqiyz',
    altText: 'Rachel & Peter wedding',
    userAgent: {
      deviceType: 'desktop',
      os: 'Windows',
    },
    shadow: false,
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
