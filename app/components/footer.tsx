
type FooterProps = {}
import styles from '@/app/components/components.module.scss'
import Link from 'next/link'

export const Footer = (props: FooterProps) => {
  const yearTxt = (new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <Link href='/2023/contact'>Contact</Link>
      <div>
        <p>© {yearTxt}</p>
      </div>
    </footer>
  )
}