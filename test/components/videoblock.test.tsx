import React from 'react'
import { render, screen } from '@testing-library/react'
import VideoBlock from '../../components/VideoBlock'

describe('VideoBlock component', () => {
  it('renders VideoBlock component', () => {
    render(<VideoBlock />)

    screen.debug()
  })

  it('VideoBlock has src attribute', () => {
    const { getByTestId } = render(<VideoBlock />)
    expect(getByTestId('video')).toHaveProperty('src')
  })
})
