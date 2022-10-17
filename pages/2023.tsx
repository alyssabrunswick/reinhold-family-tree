import styles from '../styles/Home.module.css'

const Reunion = () => {

  return (
    <>
      <h1 className={styles.title}>
        85th Annual Reinhold Family Reunion
      </h1>

      <div className={styles.description}>
        <p>Our 85th Reunion will be held on</p>
        <h3>June 11, 2023</h3>
        <p>at</p>
        <h4>at <a href='https://goo.gl/maps/Wfnnbhm27J2SjGcA7' target="_blank" rel="noreferrer">Ta-Ha-Zouka Park in Norfolk, Nebraska</a></h4>
        <p>We hope you can make it!</p>
      </div>
    </>
  )
}

export default Reunion