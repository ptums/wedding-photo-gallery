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
      <div className={`position-container ${position}`}>{children}</div>
      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          flex-direction: column;
          margin-bottom: 3.5em;
        }

        .position-container {
          width: 100%;
        }

        @media (min-width: 1200px) {
          .position-container {
            width: 50%;
          }
          .left {
            align-self: flex-start;
          }
          .right {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  )
}
