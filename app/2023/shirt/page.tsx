import styles from '../../page.module.scss'
import componentStyles from '../../components/components.module.scss'
import tshirtImage from '../../../public/images/tshirt.jpeg'
import Image from 'next/image'

export default function Shirts() {

  const sizes = [{
    label: "Youth Medium",
    value: 'ym',
    price: 10
  }, {
    label: "Youth Large",
    value: 'yl',
    price: 10
  }, {
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
    <p>{`Shirts have already been ordered!`}</p>

    <section className={styles.section}>
      <h3>Order</h3>
      <div className={componentStyles.panel}>
        <Image src={tshirtImage} alt='Reinhold family reunion picture' width='800' className={componentStyles.tshirt_image} />
      </div>
    </section>
  </main>
}