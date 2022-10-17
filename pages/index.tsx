import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import homepageImage from '../static/images/reinhold-family-reunion.jpg'
import { fetchPersons } from '../util/contentfulPosts'
import { Person } from '../components'
import { Contentful_Person } from '../types'

const Home = ({ people }: { people: Contentful_Person[] }) => {
  console.log(people)
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
          {people.map((p: Contentful_Person) => <Person key={p.id} {...p} />)}
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await fetchPersons()
  const people = await res?.map((p) => ({ id: p.sys.id, ...p.fields }))

  return {
    props: {
      people,
    },
  }
}