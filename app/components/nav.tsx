'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from '@/app/components/components.module.css'

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
        path: '/2023/shirts'
      }
    ]
  },
]

export const Navigation = (props: NavigationProps) => {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul>
        {pages.map(({ title, path, childLinks }) => {
          return (
            <li key={path} className={path === pathname ? styles.activeNav : '' } >
              <Link href={path}>{title}</Link>
              {childLinks ? <ul>
                {childLinks.map(({ title, path }) => {
                  console.log(path === pathname)
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