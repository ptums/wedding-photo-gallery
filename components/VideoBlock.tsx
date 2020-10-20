import React from 'react'

const VideoBlock = () => (
  <>
    <iframe
      src="https://player.vimeo.com/video/270889689"
      title="Rachel & Peter video"
      width="1046"
      height="595"
      className="aligncenter"
      frameBorder="0"
      allowFullScreen={true}
      data-testid="video"
    />
    <style jsx>{`
      iframe {
        box-shadow: 2px 5px 10px #e9e9e9;
        border-radius: 3px;
        margin-top: 3em;
        margin-bottom: 5em;
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
    `}</style>
  </>
)

export default VideoBlock
