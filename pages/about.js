import styles from "../styles/Home.module.css";
import Meta from "../components/meta";
import Link from "next/link";
import Footer from "../components/footer";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.container}>
      <Meta />

      <main className={styles.main}>
        <h1 className={styles.title}>About Anthony</h1>

        <blockquote>
          &quot;I can empathize and communicate with developers because I am a
          developer.&quot;
          <span>Anthony Dellavecchia</span>
        </blockquote>

        <ul className={styles.list}>
          <li>4 Years @ State Farm</li>
          <li>1 Year @ Bank of America</li>
          <li>
            <Link href="https://anthonydellavecchia.com">
              <a className={styles.link2} target="_blank">
                1 Awesome Website
              </a>
            </Link>
          </li>
        </ul>

        <div className={styles.space}></div>

        <h1 className={styles.title}>About This Site</h1>
        <h2>
          <Link href="https://anthonydellavecchia.com">
            <a className={`${styles.link} ${styles.link1}`} target="_blank">
              Anthony
            </a>
          </Link>
          &nbsp;created this site (from Feb 3-6, 2022) to showcase his skills &
          passion for{" "}
          <Link href="https://devrel.co/about/">
            <a className={`${styles.link} ${styles.link2}`} target="_blank">
              DevRel
            </a>
          </Link>
        </h2>

        <span>&#8595;</span>

        <p>Time spent coding this site: </p>
        <Image
          src="https://wakatime.com/badge/github/anthonyjdella/roadmap.svg"
          alt="wakatime"
          width={186}
          height={28}
        />

        <span>&#8595;</span>

        <p className={styles.description}>
          It&apos;s built with React + Next.js
        </p>

        <span>&#8595;</span>

        <p className={styles.description}>
          Using <code>create-next-app</code>
        </p>

        <span>&#8595;</span>

        <p className={styles.description}>
          Here&apos;s the{" "}
          <Link href="https://github.com/anthonyjdella/roadmap">
            <a className={`${styles.link} ${styles.link2}`} target="_blank">
              GitHub repo
            </a>
          </Link>
        </p>
      </main>
      <Footer />
    </div>
  );
}
