import { mitr } from '@/util'
import Image from 'next/image'
import styles from './page.module.css'
import homepageImage from '../public/images/reinhold-family-reunion.jpg'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={mitr.className}>
        Reinhold Family
      </h1>
      <Image src={homepageImage} alt='Reinhold family reunion picture' />
    </main>
  )
}
