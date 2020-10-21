import React from 'react'

const VideoBlock = () => (
  <div>
    <iframe
      src="https://player.vimeo.com/video/270889689"
      title="Rachel & Peter video"
      frameBorder="0"
      allowFullScreen={true}
      data-testid="video"
    />
    <style jsx>{`
      iframe {
        min-width: 100%;
        margin-top: 1em;
        margin-bottom: 0;
      }

      @media (min-width: 1225px) {
        iframe {
          margin-top: 3em;
          margin-bottom: 5em;
          margin-left: auto;
          margin-right: auto;
          display: block;
          min-height: 576px;
        }
      }
    `}</style>
  </div>
)

export default VideoBlock
