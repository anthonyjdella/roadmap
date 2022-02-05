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
          <h2>
            These are some of my favorite technical blog posts (which I&apos;ve
            written).
          </h2>

          <article>
            <ol className={stylesTop5.list}>
              <li className={stylesTop5.listItem}>
                My First Blog Post, in 2018
              </li>
              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe1}`}
                src="https://anthonydellavecchia.com/blog/how-to-never-miss-out-on-a-job-opening/"
                width="1028"
                height="600"
              />
              <li className={stylesTop5.listItem}>
                Solving a Scaling Issue with Personal Blogs
              </li>
              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe2}`}
                src="https://anthonydellavecchia.com/blog/how-to-add-search-to-your-hugo-static-site/"
                width="1028"
                height="600"
              />
              <li className={stylesTop5.listItem}>
                {" "}
                My Most Talked About & Engaging Post
              </li>
              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe3}`}
                src="https://anthonydellavecchia.com/blog/rogue-dev-purposely-breaks-software/"
                width="1028"
                height="600"
              />
              <li className={stylesTop5.listItem}>My First Featured Post</li>
              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe4}`}
                src="https://anthonydellavecchia.com/blog/fonts-for-programmers/"
                width="1028"
                height="600"
              />
              <li className={stylesTop5.listItem}>
                Helping Developers Solve a Compatibility Issue
              </li>
              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe5}`}
                src="https://anthonydellavecchia.com/blog/mongodb-atlas-hackathon/"
                width="1028"
                height="600"
              />
            </ol>
          </article>

          <Footer />
        </main>
      </div>
    );
}