import Image from 'next/image'
import styles from './page.module.scss'
import homepageImage from '../public/images/reinhold-family-reunion.jpg'

export default function Home() {
  return (<>
    <main className={styles.main}>
      <div className={styles['reunion-banner-wrapper']}>
        <a href={'/2023'} className={styles['reunion-banner-content']}>
          <h3>85th Annual Reinhold Reunion</h3>
          <h4>June 10-11, 2023</h4>
          <p>Click here for more details!</p>
        </a>
      </div>
      
      <h1>Reinhold Family</h1>
      <h3>est. 1938</h3>

      <div className={styles.center}>
        <Image src={homepageImage} alt='Reinhold family reunion picture' height='800' width='800' style={{ height: 'auto', maxWidth: '70vw'}} />
      </div>
    </main>
    
  </>)
}
