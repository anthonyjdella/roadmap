import styles from '../styles/Home.module.css'
import Meta from '../components/meta'

export default function About() {
    return(
        <div className={styles.container}>
            <Meta />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    About This Site
                </h1>

                <p className={styles.description}>
                This site was created from Feb 3-6, 2022, by Anthony Dellavecchia, to showcase my skills & passion for <a href="https://devrel.co/about/">DevRel.</a>

                Although, it&apos;s my first React project in 3 years (previously he built a simple static-site with Gatsby), I&apos;ve got the passion and adapatbility to learn things quickly, due to my <strong>5+ years of experience as a full-stack software developer</strong>.

                This demonstrates how quickly Anthony can learn new technical skills and how his other skills are very transferable.

                </p>

                <p className={styles.description}>
                    Built with <code>create-next-app</code>
                </p>

                <h1 className={styles.title}>
                    About Anthony
                </h1>

                <ul>
                    <li>4 Years @ State Farm</li>
                    <li>1 Year @ Bank of America</li>
                </ul>
            </main>
        </div>
    )
}