import styles from '../../page.module.scss'
import componentStyles from '../../components/components.module.scss'

export default function Shirts() {

  const sizes = [{
    label: "Youth Medium",
    value: 'ym',
    price: 10
  }, {
    label: "Youth Large",
    value: 'yl',
    price: 10
  },  {
    label: "Youth XL",
    value: 'yxl',
    price: 10
  }, {
    label: "Extra Small",
    value: 'xs',
    price: 10
  }, {
    label: "Small",
    value: 's',
    price: 10
  }, {
    label: "Medium",
    value: 'md',
    price: 10
  }, {
    label: "Large",
    value: 'lg',
    price: 10
  }, {
    label: "XL",
    value: 'xl',
    price: 10
  }, {
    label: "2XL",
    value: 'xxl',
    price: 11
  }, {
    label: "3XL",
    value: 'xxxl',
    price: 11
  }, {
    label: "4XL",
    value: 'xxxl',
    price: 12
  }, {
    label: "5XL",
    value: 'xxxl',
    price: 12
  }]

  return <main className={styles.main}>
    <h1>T-shirts</h1>
    <p>{`This year we'll be ordering tshirts again if you're insterested!`}</p>
    <p>{`The deadline to order is`} <b>May 12, 2023</b></p>

    <section className={styles.section}>
      <h3>Order</h3>
      <div className={componentStyles.panel}>

        <form name="shirts" method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/success"
          className={componentStyles.form}>
          <input type="hidden" name="form-name" value="shirts" />
          <p className="hidden" hidden>
            <label>
              {`Do not fill this out if you are human:`} <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>Your Name: <input type="text" name="name" required /></label>
          </p>
          <p>{`Please enter the quantity you'd like for each size:`}</p>
          <ul>
            {sizes?.map(({ label, value, price }) => (
              <li key={value}>
                <label>
                  <span>{label}</span>
                  <span className={componentStyles.price}>${price}</span>
                  <input type="number" name={value} id={value} max={10} />
                </label>
              </li>
            ))}
          </ul>
          <button type="submit" style={{ cursor: 'pointer' }}>Submit</button>
        </form>
      </div>

    </section>

    <section className={`${styles.section} + ${styles.narrow}`}>
      <h3>Payment</h3>
      <p className={componentStyles.panel}>{`We'll only place orders for shirts that are paid for. Feel free to pay Alyssa via Paypal or Venmo, or contact one of us if you'd prefer another way!`}</p>
      <ul style={{ padding: '0 5rem' }}>
        <li><a href='paypal.me/AlyssaBrunswick' target='_blank' rel='noreferrer'>paypal.me/AlyssaBrunswick</a></li>
        <li>Venmo | @alyssabrunswick</li>
        <li>If would like to send check to Theresa Ramirez for payment that works too. You can contact her via email at <a href='mailto:theresa.m.ramirez@gmail.com'>theresa.m.ramirez@gmail.com</a> or text to <a href='+14027506333'>402-750-6333</a></li>
      </ul>
    </section>
  </main>
}