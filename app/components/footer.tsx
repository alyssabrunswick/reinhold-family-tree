
type FooterProps = {}
const styles = {
  footer: ''
}
export const Footer = (props: FooterProps) => {
  const yearTxt = (new Date().getFullYear())
  return (
    <footer className={styles.footer}>
      <p>© {yearTxt}</p>
    </footer>
  )
}