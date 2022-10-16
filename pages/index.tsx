import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import homepageImage from '../static/images/reinhold-family-reunion.jpg'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Reinhold family</title>
        <meta name="description" content="Reinhold family" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Reinhold Family
        </h1>
        <Image src={homepageImage} alt='Reinhold family reunion picture' />
        <div className={styles.grid}>

        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home
