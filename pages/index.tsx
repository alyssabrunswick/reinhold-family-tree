import Image from 'next/image'
import styles from '../styles/Home.module.css'
import homepageImage from '../public/images/reinhold-family-reunion.jpg'
import { fetchPersons } from '../util/contentful'
import { Person } from '../components'
import { Contentful_Person } from '../types'
import Link from 'next/link'

const Home = ({ people }: { people: Contentful_Person[] }) => {

  return (
    <>
      <h1 className={styles.title}>
        Reinhold Family
      </h1>
      <Image src={homepageImage} alt='Reinhold family reunion picture' />

      <h2><Link href='/2023'>85th Annual Reunion</Link></h2>
      <div className={styles.grid}>
        {people.map((p: Contentful_Person) => <Person key={p.id} {...p} />)}
      </div>
    </>
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