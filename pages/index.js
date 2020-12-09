import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome. Read <Link href="/posts/first-post">
            <a>first post</a>
          </Link>
        </h1>

        <p>this is the home page...</p>        
      </main>

      
    </div>
  )
}
