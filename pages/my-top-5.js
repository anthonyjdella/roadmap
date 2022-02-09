import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'
import stylesTop5 from '../styles/Top5.module.css'
import Link from "next/link";

export default function MyTop5() {
    return (
      <div className={styles.container}>
        <Meta />

        <main className={styles.main}>
          <h1 className={styles.title}>My Top 5</h1>
          <h2>
            These are some of my favorite technical blog posts (which I&apos;ve
            written)
          </h2>

          <article>
            <ol>
              <li className={stylesTop5.listItem}>
                <Link href="https://anthonydellavecchia.com/blog/how-to-never-miss-out-on-a-job-opening/">
                  <a
                    className={`${styles.link} ${styles.link1}`}
                    target="_blank"
                  >
                    My First Blog Post, in 2018
                  </a>
                </Link>
              </li>

              <h2>Why I like it</h2>
              <p>
                It solves a problem, it teaches developers,{" "}
                <i>it automates tedious tasks</i>, it was my first blog post
              </p>

              <h2>What&apos;s it about?</h2>
              <p>
                Tutorial about developing an automated script to search & notify
                you of new job postings. Using Node.js
              </p>

              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe1}`}
                src="https://anthonydellavecchia.com/blog/how-to-never-miss-out-on-a-job-opening/"
                width="1028"
                height="600"
              />

              <li className={stylesTop5.listItem}>
                <Link href="https://anthonydellavecchia.com/blog/how-to-add-search-to-your-hugo-static-site/">
                  <a
                    className={`${styles.link} ${styles.link2}`}
                    target="_blank"
                  >
                    Solving a Scaling Issue with Personal Blogs
                  </a>
                </Link>
              </li>

              <h2>Why I like it</h2>
              <p>
                It solves a problem, it teaches developers,
                <i> it helps scale blog-style websites</i>, it was fun to
                implement
              </p>

              <h2>What&apos;s it about?</h2>
              <p>
                Tutorial to help developers scale their personal blog by adding
                search functionality. Using Algolia and Hugo.
              </p>

              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe2}`}
                src="https://anthonydellavecchia.com/blog/how-to-add-search-to-your-hugo-static-site/"
                width="1028"
                height="600"
              />

              <li className={stylesTop5.listItem}>
                <Link href="https://anthonydellavecchia.com/blog/rogue-dev-purposely-breaks-software/">
                  <a
                    className={`${styles.link} ${styles.link1}`}
                    target="_blank"
                  >
                    My Most Talked About & Engaging Post
                  </a>
                </Link>
              </li>

              <h2>Why I like it</h2>
              <p>
                It has over 700 reactions & 60 comments, it brings awareness to
                software licensing and open source,
                <i> the topic impacts millions of developers</i>
              </p>

              <h2>What&apos;s it about?</h2>
              <p>
                A popular developer purposely introduced a bug into his
                software, which cascaded to thousands of other software.
              </p>

              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe3}`}
                src="https://anthonydellavecchia.com/blog/rogue-dev-purposely-breaks-software/"
                width="1028"
                height="600"
              />

              <li className={stylesTop5.listItem}>
                <Link href="https://anthonydellavecchia.com/blog/fonts-for-programmers/">
                  <a
                    className={`${styles.link} ${styles.link2}`}
                    target="_blank"
                  >
                    My First Featured Post
                  </a>
                </Link>
              </li>

              <h2>Why I like it</h2>
              <p>
                It has over 600 reactions & 30 comments,{" "}
                <Link href="https://dev.to/devteam/top-7-featured-dev-posts-from-the-past-week-41f0">
                  <a
                    className={`${styles.link} ${styles.link2}`}
                    target="_blank"
                  >
                    it was featured on Dev.to,
                  </a>
                </Link>{" "}
                it improves developer experiences
              </p>

              <h2>What&apos;s it about?</h2>
              <p>
                I explain why using a developer-specific font can improve your
                productivity and health.
              </p>

              <iframe
                className={`${stylesTop5.iframe} ${stylesTop5.iframe4}`}
                src="https://anthonydellavecchia.com/blog/fonts-for-programmers/"
                width="1028"
                height="600"
              />

              <li className={stylesTop5.listItem}>
                <Link href="https://anthonydellavecchia.com/blog/mongodb-atlas-hackathon/">
                  <a
                    className={`${styles.link} ${styles.link1}`}
                    target="_blank"
                  >
                    Helping Developers Solve a Compatibility Issue
                  </a>
                </Link>
              </li>

              <h2>Why I like it</h2>
              <p>
                I learned a lot,{" "}
                <i>
                  it helps other developers wanting to solve a similar problem
                </i>
              </p>

              <h2>What&apos;s it about?</h2>
              <p>
                Django doesn&apos;t support MongoDB, so I explain a workaround
                for it. Using PyMongo, a Python distribution.
              </p>

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