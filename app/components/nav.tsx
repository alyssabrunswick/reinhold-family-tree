'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/app/components/components.module.scss'

type NavigationProps = {}

const pages = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: '2023 Reunion',
    path: '/2023',
    childLinks: [
      {
        title: 'Activities',
        path: '/2023/activities'
      },
      {
        title: 'Lodging',
        path: '/2023/lodging'
      },
      {
        title: 'Shirts',
        path: '/2023/shirt'
      }
    ]
  },
]

export const Navigation = (props: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav aria-label="main navigation" className={styles.nav}>
      <ul>
        {pages.map(({ title, path, childLinks }) => {
          return (
            <li key={path} className={childLinks ? styles.dropdown : undefined}>
              <Link href={path} aria-controls='2023-dropdown' className={`${styles[`dropdown__title`]} ${path === pathname ? styles.activeNav : styles.defaultNav}`}>{title}</Link>
              {childLinks ? <ul className={styles[`dropdown__menu`]} id='2023-dropdown'>
                {childLinks.map(({ title, path }) => {
                  return (
                    <li key={path} className={path === pathname ? styles.activeNav :  styles.defaultNav }>
                      <Link href={path}>{title}</Link>
                    </li>
                  )
                })}
              </ul> : null}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}