import styles from '../../styles/Home.module.css'
import { fetchPersons } from '../../util/contentful'
import { Person } from '../../components'
import { Contentful_Person } from '../../types'
import Link from 'next/link'

const People = ({ people }: { people: Contentful_Person[] }) => {

  return (
    <>
      <h1>These are all the peoplez</h1>
      <div className={styles.grid}>
        {people.map((p: Contentful_Person) => <Person key={p.id} {...p} />)}
      </div>
    </>
  )
}

export default People

export async function getStaticProps() {
  const res = await fetchPersons()
  const people = await res?.map((p) => ({ id: p.sys.id, ...p.fields }))

  return {
    props: {
      people,
    },
  }
}