import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import styles from '../styles/LightBoxView.module.css'

type Props = {
  image: string
}

export default function LightBoxView({ image }: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  const imageLink = `https://res.cloudinary.com/petertumulty/image/upload/v1603156786/${image}`

  function DownloadButton() {
    return (
      <a href={imageLink} className={styles.downloadLink} download>
        Download
      </a>
    )
  }

  return (
    <>
      <a href={imageLink} className={styles.zoomInLink} download>
        Download
      </a>
      <button
        type="button"
        className={`${styles.removeBtnStyles} ${styles.zoomInLink}`}
        onClick={() => setOpen(true)}
      >
        Zoom In
      </button>
      {open && (
        <Lightbox
          mainSrc={imageLink}
          onCloseRequest={() => setOpen(false)}
          toolbarButtons={[<DownloadButton key="download-button" />]}
        />
      )}
    </>
  )
}
