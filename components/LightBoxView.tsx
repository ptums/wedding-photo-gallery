import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import styles from '../styles/LightBoxView.module.css'
import { fetchImageForDownload } from '../utils/helpers'

type Props = {
  image: string
}

export default function LightBoxView({ image }: Props): JSX.Element {
  const [open, setOpen] = useState(false)
  const baseUrl = `https://res.cloudinary.com/petertumulty/image/upload/v1603156786/`
  const imageLink = `${baseUrl}${image}`
  const fileName = image
    .slice(image.lastIndexOf('/') + 1, image.length)
    .replace('webp', 'png')
  const downloadLink = `${baseUrl}${image.replace('.webp', '.png')}`

  function DownloadButton() {
    return (
      <button
        onClick={() => fetchImageForDownload(downloadLink, fileName)}
        className={`${styles.removeBtnStyles} ${styles.zoomInLink} ${styles.white}`}
      >
        Download
      </button>
    )
  }

  return (
    <>
      <button
        onClick={() => fetchImageForDownload(downloadLink, fileName)}
        className={`${styles.removeBtnStyles} ${styles.zoomInLink}`}
      >
        Download
      </button>
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
