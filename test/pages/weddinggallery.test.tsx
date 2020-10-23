import React from 'react'
import { render } from '@testing-library/react'
import WeddingGallery from '../../pages/wedding-gallery'

describe('Wedding Gallery', () => {
  const userAgent = {
    os: 'Android',
    deviceType: 'mobile',
  }
  it('matches snapshot', () => {
    const { asFragment } = render(<WeddingGallery userAgent={userAgent} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
