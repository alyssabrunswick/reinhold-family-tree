import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

type NavigationProps = {}

const pages = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: '2023 Reunion',
    path: '/2023'
  }
]

export const Navigation = (props: NavigationProps) => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <ul>
        {pages.map(({ title, path }) => {
          return (
            <li key={path} className={path === router.route ? styles.activeNav : ''}>
              <Link href={path}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}