import React from 'react'
import { render, screen } from '@testing-library/react'
import LightBoxView from '../../components/LightBoxView'

describe('LightBoxView component', () => {
  it('renders LightBoxView component', () => {
    render(
      <LightBoxView image="wedding/after-ceremony/RachelPeterCheersChampagneCloseUp_loxalt.webp" />
    )
    // https://www.youtube.com/watch?v=NE_aorvSeSQ
    screen.debug()
  })
})
