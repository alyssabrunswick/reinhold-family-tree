import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer, Person } from '../components'
import React from 'react'
import { Navigation } from './nav'

export const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Reinhold family</title>
        <meta name="description" content="Reinhold family" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main className={styles.main}>
        {children}
      </main>

      <Footer />
    </div>
  )
}