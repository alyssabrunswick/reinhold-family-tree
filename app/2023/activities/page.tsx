import styles from '../../page.module.css'
import componentStyles from '../../components/components.module.css'
import { Activity, saturday, saturdayEvening, sunday } from './activity-descriptions'

function Content({ name, description, time, location, isMain }: Activity) {
  
  return (
    <div key={name}>
      {isMain ?
        <h2>{name} <span> | {time}</span></h2>
        : <h3>{name}<span> | {time}</span></h3>}
        <h4>{location}</h4>
      <div>{description}</div>
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
            Please sign up at `} <a href={signupURL} target="_blank" rel="noreferrer">{signupURL}</a>.</p>
      </div>
      <Content {...saturdayEvening} isMain />
    </section>

    <section className={styles.section}>
      <h2>Sunday</h2>
      <Content {...sunday} isMain />
    </section>
  </main>
}