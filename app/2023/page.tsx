import Image from 'next/image'
import reunionImage from '../../public/images/84th.jpeg'
import styles from '../page.module.scss'

export default function Page() {
  return <main className={styles.main}>
    <h1>
      85th Annual Reinhold Family Reunion
    </h1>

    <Image src={reunionImage} alt='Reinhold family reunion picture' width='800' style={{ height: 'auto', maxWidth: '50vw', marginTop: '3vh'}} />

    <div className={styles.center}>
      <p>Our 85th Reunion will be held on</p>
      <h3>June 10-11, 2023</h3>
      <h4>in <a href='https://goo.gl/maps/Wfnnbhm27J2SjGcA7' target="_blank" rel="noreferrer">Norfolk, Nebraska</a></h4>
      <p>We hope you can make it!</p>

      <div className={`${styles.section} ${styles.grid3}`}>
        <a href={'/2023/activities'} className={styles.card}>
          <h3>Activities</h3>
          <p>We have a handful of activities planned! Please join the ones you can!</p>
        </a>
        <a href={'/2023/lodging'} className={styles.card}>
          <h3>Lodging</h3>
          <p>Hotel and camping recommendations.</p>
        </a>
        <a href={'/2023/shirt'} className={styles.card}>
          <h3>Shirts</h3>
          <p>Get your order in!</p>
        </a>
      </div>
    </div>
  
  </main>
}