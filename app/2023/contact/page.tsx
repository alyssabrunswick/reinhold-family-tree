import styles from '../../page.module.scss'
import componentStyles from '../../components/components.module.scss'

export default function ContactPage() {
  return <main className={styles.main}>
    <h1>Contact</h1>
    <h3>If you have any questions, feel free to contact us!</h3>

    <section className={styles.section}>
      <h2>Facebook Group</h2>
      <div className={componentStyles.panel}>
        <p>Message us or post on the <a href='http://'>Reinhold Family reunioni Facebook group</a></p>
      </div>
    </section>

    <section className={styles.section}>
      <h2>Alyssa Brunswick</h2>
      <div className={componentStyles.panel}>
        <p>For website or facebook questions, or questions abou thte kayak activity, email her at <a href='mailto:alyssa.brunswick@gmail.com'>alyssa.brunswick@gmail.com</a>.</p>
      </div>
    </section>

    <section className={styles.section}>
      <h2>Theresa Ramirez</h2>
      <div className={componentStyles.panel}>
        <p>For general questions, or questions about the History Tour or group meals, contact her at<a href='+14027506333'>402-750-6333</a>.</p>
      </div>
    </section>
  </main>
}