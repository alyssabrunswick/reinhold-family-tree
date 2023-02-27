import Image from 'next/image'
import styles from './page.module.css'
import homepageImage from '../public/images/reinhold-family-reunion.jpg'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Reinhold Family
      </h1>

      <h3>est. 1938</h3>

      <div className={styles.center}>
        <Image src={homepageImage} alt='Reinhold family reunion picture' height='800' width='800' style={{ height: 'auto', maxWidth: '70vw'}} />
      </div>
    </main>
  )
}
