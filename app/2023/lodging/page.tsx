import styles from '../../page.module.scss'
import { camping, hotels, type Location } from './lodging-data'

function Address ({ name,  address,  googleMapsLink,  phone,  website }: Location) {
  return (
    <div key={phone}>
      <a href={website} target="_blank" rel="noreferrer">
        <h3>{name}</h3>
      </a>
      <a href={googleMapsLink}>
        <p>{address}</p>
      </a>
      <a href={`tel:${phone}`}>
        <p>{phone}</p>
      </a>
    </div>
  )
}

export default function Lodging() {
  return <main className={styles.main}>
    <h1>
      Lodging
    </h1>

    <section className={styles.section}>
      <h2>Hotels</h2>
      <div className={styles.grid3}>
        {hotels.map((hotel) => <Address {...hotel} key={hotel.phone} />)}
      </div>
    </section>

    <section className={styles.section}>
      <h2>Campgrounds</h2>
      <div className={styles.grid2}>
        {camping.map((location) => <Address {...location} key={location.phone} />)}
      </div>
    </section>
  
  </main>
}