import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '../styles/pages/Home.module.scss'
import Pages from '../components/pages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfólio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Pages />
      </main>
    </>
  )
}