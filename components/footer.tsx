import React from 'react'
import styles from '../styles/Home.module.css'

type FooterProps = {}

export const Footer = (props: FooterProps) => {
  const yearTxt = (new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <p>© {yearTxt}</p>
    </footer>
  )
}