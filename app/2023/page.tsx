import styles from '../page.module.scss'

export default function Page() {
  return <main className={styles.main}>
    <h1>
      85th Annual Reinhold Family Reunion
    </h1>

    <div className={styles.center}>
      <p>Our 85th Reunion will be held on</p>
      <h3>June 10-11, 2023</h3>
      <h4>in <a href='https://goo.gl/maps/Wfnnbhm27J2SjGcA7' target="_blank" rel="noreferrer">in Norfolk, Nebraska</a></h4>
      <p>We hope you can make it!</p>
    </div>
  </main>
}