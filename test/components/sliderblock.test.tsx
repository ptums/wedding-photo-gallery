import React from 'react'
import { render, screen } from '@testing-library/react'
import SliderBlock from '../../components/SliderBlock'

describe('SliderBlock component', () => {
  const slides = [
    {
      _id: '123',
      image: 'wedding/site/peterrachelattable_utqiyz.webp',
      altText: 'Rachel & Peter wedding One',
      options: '/e_shadow:35,r_10/',
      category: 'home',
    },
    {
      _id: '456',
      image: 'wedding/site/peterrachelattable_utqiyz.webp',
      altText: 'Rachel & Peter wedding Two',
      options: '/e_shadow:35,r_10/',
      category: 'home',
    },
    {
      _id: '678',
      image: 'wedding/site/peterrachelattable_utqiyz.webp',
      altText: 'Rachel & Peter wedding Three',
      options: '/e_shadow:35,r_10/',
      category: 'home',
    },
  ]

  it('renders SliderBlock component', () => {
    render(<SliderBlock slides={slides} />)

    screen.debug()
  })
})
