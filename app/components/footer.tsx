
type FooterProps = {}
import styles from '@/app/components/components.module.scss'

export const Footer = (props: FooterProps) => {
  const yearTxt = (new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <p>© {yearTxt}</p>
    </footer>
  )
}