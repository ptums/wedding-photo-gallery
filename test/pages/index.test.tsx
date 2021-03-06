import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages/'

describe('Home page', () => {
  const userAgent = {
    os: 'Android',
    deviceType: 'mobile',
  }
  it('matches snapshot', () => {
    const { asFragment } = render(<Home userAgent={userAgent} />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
