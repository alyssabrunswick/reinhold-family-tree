import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { fetchPerson } from '../../util/contentful'
import { Contentful_Person } from '../../types'
import Link from 'next/link'
import { GetStaticPaths } from 'next'

type PersonTypes = {
  person: Contentful_Person
}

const Date = ({ title, date }: { title: string, date: string }) => (
  <div>
    <label>{title}</label>
    <p>{date}</p>
  </div>
)

const Person = ({ person }: PersonTypes) => {
  const router = useRouter();
  const { slug } = router.query
  const { firstName, lastName, birthDate, deathDate, images } = person
  const { file } = images[0].fields
  return (
    <div className={styles.person}>
      <h1>{`${firstName} ${lastName}`}</h1>
      <Image src={file.url} alt={file.fileName} {...file.details.image} />

      {birthDate ? <>
        <Date title={'Birth Date'} date={deathDate} />
        <Date title={'Death Date'} date={birthDate} />
      </> : null}
    </div>
  )
}

export default Person

type PersonRequest = {
  params: {
    slug: string
  }
  preview?: boolean
}
export async function getStaticProps({ params, preview = false }: PersonRequest) {
  const res = await fetchPerson(params.slug)

  return {
    props: {
      preview,
      person: res[0].fields,
    },
  }
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}