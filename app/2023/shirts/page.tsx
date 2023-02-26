import styles from '../../page.module.css'
export default function Shirts() {

  const sizes = [{
    label: "Extra Small",
    value: 'xs'
  },{
    label: "Small",
    value: 's'
  },{
    label: "Medium",
    value: 'md'
  },{
    label: "Large",
    value: 'lg'
  },{
    label: "XL",
    value: 'xl'
  },{
    label: "2XL",
    value: 'xxl'
  },{
    label: "3XL",
    value: 'xxxl'
  }]


  return <main className={styles.main}>
    <h1>T-shirts</h1>
    <h3>{`This year we'll be ordering tshirts again if you're insterested!`}</h3>
    <p>{`The deadline to order is`} <b>TBD</b></p>

    <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className={styles.form}>
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
        {sizes?.map(({label, value}) => (
          <li key={value}><label>{label}<input type="number" name={value} id={value} max={10}/></label></li>
        ))}
      </ul>
      <button type="submit" disabled>Submit</button>
    </form>
  </main>
}