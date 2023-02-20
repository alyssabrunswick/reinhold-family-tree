const styles = {
  container: '',
  main: ''
}
import { Footer } from '.'
import React from 'react'
import { Navigation } from './nav'

export const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={styles.container}>

      <Navigation />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}