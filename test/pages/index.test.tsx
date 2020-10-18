import React from 'react'
import { render } from '@testing-library/react'
import Home from '../../pages/'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
