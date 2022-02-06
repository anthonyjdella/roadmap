import Link from 'next/link'
import Meta from '../components/meta'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'
import Confetti from 'react-dom-confetti';
import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._confetti = this._confetti.bind(this);
  }

  _confetti() {
    this.setState((prevState) => ({
      showComponent: !prevState.showComponent,
      confettiConfig: {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 140,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "20px",
        height: "20px",
        perspective: "500px",
        colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
      },
    }));
    console.log("confetti!");
    console.log(this.state.showComponent);
    console.log(this.state.confettiConfig);
  }

  render() {
    return (
      <div className={styles.container}>
        <Meta />

        <main className={styles.main}>
          <h1
            className={`${styles.title} ${styles.welcome}`}
            onClick={this._confetti}
          >
            Welcome! 🎉
            <Confetti
              active={this.state.showComponent}
              config={this.state.confettiConfig}
            />
          </h1>
          <h2>
            This is&nbsp;
            <Link href="https://anthonydellavecchia.com">
              <a className={`${styles.link} ${styles.link1}`} target="_blank">
                Anthony&apos;s
              </a>
            </Link>
            &nbsp;DevRel Roadmap
          </h2>

          <div className={styles.grid}>
            <Link href="/what-are-apis">
              <a
                className={`${styles.card} ${styles.card1}`}
                onClick={this._confetti}
              >
                <h2>What are APIs? &rarr;</h2>
                <p>
                  Learn more about APIs and how RapidAPI can help find the right
                  API for your needs.
                </p>
              </a>
            </Link>

            <Link href="/my-top-5">
              <a className={`${styles.card} ${styles.card2}`}>
                <h2>My Top 5 &rarr;</h2>
                <p>
                  Here are my top 5 favorite technical blog posts (which
                  I&apos;ve written).
                </p>
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
                  I document my thought process for the creation of this website
                  (so meta).
                </p>
              </a>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}
