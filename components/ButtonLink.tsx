import React from 'react'
import Link from 'next/link'
import styles from '../styles/Button.module.css'

export default function ButtonLink() {
  return (
    <Link href="/wedding-gallery">
      <a className={styles.button}>Photo Album</a>
    </Link>
  )
}
