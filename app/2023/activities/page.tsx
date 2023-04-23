import styles from '../../page.module.scss'
import componentStyles from '../../components/components.module.scss'
import { Activity, saturday, saturdayEvening, sunday } from './activity-descriptions'
import Link from 'next/link'

function Content({ name, description, time, location, isMain, facebookEventLink }: Activity) {
  
  return (
    <div key={name}>
      {isMain ?
        <h2>{name} <span> | {time}</span></h2>
        : <h3>{name}<span> | {time}</span></h3>}
        <h4>{location}</h4>
      <div>{description}</div>
      {facebookEventLink ? <p>RSVP on the <Link href={facebookEventLink} target='_blank'>Facebook event page</Link>.</p> : null}
    </div>
  )
}

const signupURL = 'https://tinyurl.com/reinholdfam2023'
export default function Activities() {
  return <main className={styles.main}>
    <h1>Activities</h1>

    <section className={styles.section}>
      <h2>Saturday</h2>
      <div className={styles.grid2}>
        {saturday.map((activity) => <Content {...activity} key={activity.name} />)}
      </div>
      <div className={componentStyles.panel}>
        <p>{`For the group activities, we'd like to know who wants to join so we can coordinate best. 
            Please sign up at `} <a href={signupURL} target="_blank" rel="noreferrer">{signupURL}</a> or in the form below.</p>
      </div>
      <Content {...saturdayEvening} isMain />
    </section>

    <section className={styles.section}>
      <h2>Sunday</h2>
      <Content {...sunday} isMain />
    </section>

    <section className={styles.section}>
      <h2>Sign up</h2>
    
      <a href='https://forms.gle/aEWKuT2pWy6UcuRx7' target='_blank' rel='noreferrer'>Google Form Sign Up Sheet</a>
      
      <div className={`${componentStyles.panel} ${styles.hideOnSmall}`}>
        <iframe  src='https://docs.google.com/forms/d/e/1FAIpQLScXfiFtelSw5MPp4XBAEGX-VOZ3Hl3vfD1xzWVnYcYE66KruA/viewform?embedded=true' width='800' height='990'>Loading…</iframe>
      </div>
    </section>
  </main>
}