import Link from 'next/link'
import Meta from '../components/meta'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome! 🎉
        </h1>

        <p className={styles.description}>
          This was created as a way to showcase my ability to quickly pick up new skills.
          <br />
          It&apos;s built on React + Next.js
        </p>

        <div className={styles.grid}>
          <Link href="/what-is-rapidapi">
            <a className={`${styles.card} ${styles.card1}`}>
              <h2>What are APIs? &rarr;</h2>
              <p>Learn more about APIs and how RapidAPI can help find the right API for your needs.</p>
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

      <Footer/>
    </div>
  )
}
