import React from 'react'
import { render, screen } from '@testing-library/react'
import ContentBlock from '../../components/ContentBlock'

describe('ImageContainer component', () => {
  const props = {
    position: 'right',
    children: `
      <>
      <h3>About</h3>
      <p>
        The best part of getting married is getting the opportunity to
        celebrate with our loved ones. Thank you all for the continuous
        support and love.
      </p>
      <p>
        <strong>
          We were so happy you could party it up with us on March 30th, 2019!
        </strong>
      </p>
      </>    
    `,
  }

  it('renders ContentBlock component', () => {
    render(<ContentBlock {...props} />)

    screen.debug()
  })

  it('renders proper ContentBlock props', () => {
    render(<ContentBlock {...props} />)

    expect(screen.getByText(/About/)).toBeDefined()
  })
})
