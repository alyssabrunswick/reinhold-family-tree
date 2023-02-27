import styles from '../../page.module.scss'
import componentStyles from '../../components/components.module.scss'

export default function Shirts() {

  const sizes = [{
    label: "Extra Small",
    value: 'xs'
  }, {
    label: "Small",
    value: 's'
  }, {
    label: "Medium",
    value: 'md'
  }, {
    label: "Large",
    value: 'lg'
  }, {
    label: "XL",
    value: 'xl'
  }, {
    label: "2XL",
    value: 'xxl'
  }, {
    label: "3XL",
    value: 'xxxl'
  }]


  return <main className={styles.main}>
    <h1>T-shirts</h1>
    <p>{`This year we'll be ordering tshirts again if you're insterested!`}</p>
    <p>{`The deadline to order is`} <b>TBD</b></p>

    <section className={styles.section}>
      <h3>Order</h3>
      <div className={componentStyles.panel}>

      <form name="2023shirts" method="POST" data-netlify="true" netlify-honeypot="bot-field" className={componentStyles.form}>
        <p className="hidden" hidden>
          <label>
            {`Do not fill this out if you are human:`} <input name="bot-field" />
          </label>
        </p>
        <p>
          <label>Your Name: <input type="text" name="name" required /></label>
        </p>
        <p>{`Please enter the quantity you'd like for each size`}</p>
        <ul>
          {sizes?.map(({ label, value }) => (
            <li key={value}><label>{label}<input type="number" name={value} id={value} max={10} /></label></li>
          ))}
        </ul>
        <button type="submit" disabled>Submit</button>
      </form>
      </div>

    </section>

    <section className={`${styles.section} + ${styles.narrow}`}>
      <h3>Payment</h3>
      <p className={componentStyles.panel}>{`We'll only place orders for shirts that are paid for. Feel free to pay Alyssa via Paypal or Venmo, or contact one of us if you'd prefer another way!`}</p>
      <ul style={{ padding: '0 5rem'}}>
        <li><a href='paypal.me/AlyssaBrunswick' target='_blank' rel='noreferrer'>paypal.me/AlyssaBrunswick</a></li>
        <li>Venmo | @alyssabrunswick</li>
      </ul>
    </section>
  </main>
}