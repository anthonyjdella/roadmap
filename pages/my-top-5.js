import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'
import stylesTop5 from '../styles/Top5.module.css'

export default function MyTop5() {
    return (
      <div className={styles.container}>
        <Meta />

        <main className={styles.main}>
          <h1 className={styles.title}>My Top 5</h1>
          <h2>These are some of my favorite technical blog posts.</h2>

          <article>
            <ol className={stylesTop5.list}>
              <li>My First Blog Post, in 2018</li>
              <iframe src="https://dev.to/anthonyjdella/why-you-should-use-a-developer-font-2gio" />
              <iframe src="https://medium.com/@anthonyjdella/how-to-never-miss-out-on-a-job-opening-node-js-with-puppeteer-d46f23139802" />
              <li>Solving a Scaling Issue with Personal Blogs</li>
              <li>My Most Talked About & Engaging Post</li>
              <li>My First Featured Post</li>
              <li>Helping Developers Solve a Compatibility Issue</li>
            </ol>
          </article>

          <Footer />
        </main>
      </div>
    );
}