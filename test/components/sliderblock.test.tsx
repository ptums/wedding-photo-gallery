import React from 'react'
import { render, screen } from '@testing-library/react'
import SliderBlock from '../../components/SliderBlock'

describe('SliderBlock component', () => {
  const slides = [
    {
      _id: '123',
      image: 'wedding/site/peterrachelattable_utqiyz.webp',
      altText: 'Rachel & Peter wedding One',
      category: 'home',
    },
    {
      _id: '456',
      image: 'wedding/site/peterrachelattable_utqiyz.webp',
      altText: 'Rachel & Peter wedding Two',
      category: 'home',
    },
    {
      _id: '678',
      image: 'wedding/site/peterrachelattable_utqiyz.webp',
      altText: 'Rachel & Peter wedding Three',
      category: 'home',
    },
  ]

  const userAgent = {
    os: 'iOS',
    deviceType: 'tablet',
  }

  it('renders SliderBlock component', () => {
    render(<SliderBlock slides={slides} userAgent={userAgent} />)

    screen.debug()
  })
})
