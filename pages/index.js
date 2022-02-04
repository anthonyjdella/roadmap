import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anthony Dellavecchia</title>
        <meta name="description" content="Anthony Dellavecchia, the software engineer" />
        <link rel="shortcut icon" href="/images/flat-avatar-2022.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/flat-avatar-2022.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/flat-avatar-2022.svg"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/flat-avatar-2022.svg"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome! 🎉
        </h1>

        <p className={styles.description}>
          This was created as a way to showcase my ability to quickly pick up new skills.
          <br/>
          It&apos;s built on React + Next.js
        </p>

        <div className={styles.grid}>
          <Link href="/what-is-rapidapi">
            <a className={`${styles.card} ${styles.card1}`}>
              <h2>What is RapidAPI? &rarr;</h2>
              <p>Learn more about the company, RapidAPI, as well as APIs in general.</p>
            </a>
          </Link>

          <Link href="/my-top-5">
            <a className={`${styles.card} ${styles.card2}`}>
              <h2>My Top 5 &rarr;</h2>
              <p>Here are my top 5 favorite technical blog posts (which I&apos;ve written).</p>
            </a>
          </Link>

          <Link href="/my-roadmap">
            <a className={`${styles.card} ${styles.card3}`}>
              <h2>My Roadmap &rarr;</h2>
              <p>Where I see myself in the future and my DevRel journey.</p>
            </a>
          </Link>

          <Link href="/product-lifecycle">
            <a className={`${styles.card} ${styles.card4}`}>
              <h2>Product Lifecycle &rarr;</h2>
              <p>
                I document my thought process for the creation of this project (so meta).
              </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://anthonydellavecchia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wanna learn more? Check out my website {' '}
          <span className={styles.logo}>
            <Image src="/anthony-logo.png" alt="Anthony Dellavecchia Avatar" width={52} height={34} />
          </span>
        </a>
      </footer>
    </div>
  )
}
