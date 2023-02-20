import './globals.css'
import { Navigation } from '@/app/components/nav'
import { mitr } from '@/util'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={mitr.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
