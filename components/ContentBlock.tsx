import React, { ReactNode } from 'react'

type Props = {
  position: string
  children: ReactNode
}

export default function ContentBlock({
  position,
  children,
}: Props): JSX.Element {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          width: 100%;
          margin-bottom: 3.5em;
        }

        @media (min-width: 1200px) {
          div {
            width: 50%;
            float: ${position};
          }
        }
      `}</style>
    </div>
  )
}
