import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'
import stylesLifeCycle from '../styles/Lifecycle.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Confetti from "react-dom-confetti";
import React from 'react'

export default class ProductLifecycle extends React.Component {
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
        spread: 200,
        startVelocity: 40,
        elementCount: 100,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: "10px",
        height: "10px",
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
              <h1 className={styles.title}>Product Lifecycle</h1>
              <h2>My design process for creating this website</h2>

              <article className={stylesLifeCycle.article}>
                <ul>
                  <li className={stylesLifeCycle.listItem}>
                    Step 1: Why This Website?
                  </li>
                  <p className={stylesLifeCycle.description}>
                    I wanted to showcase my DevRel skills while use languages
                    and tools that are new to me. I thought it&apos;d be a
                    creative way to put myself out there.
                  </p>
                  <li className={stylesLifeCycle.listItem}>
                    Step 2: List Requirements
                  </li>
                  <ul>
                    <li className={stylesLifeCycle.description}>
                      Show my Top 5 favorite blog posts
                    </li>
                    <li className={stylesLifeCycle.description}>
                      Write a new post about APIs and make it easy to understand
                    </li>
                    <li className={stylesLifeCycle.description}>
                      Create a roadmap to plan my future in DevRel and where I
                      see myself
                    </li>
                    <li className={stylesLifeCycle.description}>
                      Have fun and learn new things!
                    </li>
                  </ul>
                  <br />
                  <li className={stylesLifeCycle.listItem}>
                    Step 3: UX Design
                  </li>
                  <p className={stylesLifeCycle.description}>
                    Before development, I wanted to form the layout for my site
                    and create wireframes.
                  </p>
                  <div className={`${stylesLifeCycle.border}`}>
                    <Image
                      src="/wireframe-1.jpg"
                      alt="Wireframe 1"
                      width={800}
                      height={600}
                    />
                  </div>
                  <p className={stylesLifeCycle.caption}>
                    Wireframe Overview of this site
                  </p>
                  <div className={`${stylesLifeCycle.border}`}>
                    <Image
                      src="/wireframe-2.jpg"
                      alt="Wireframe 2"
                      width={800}
                      height={600}
                    />
                  </div>

                  <p className={stylesLifeCycle.caption}>Homepage</p>
                  <div className={`${stylesLifeCycle.border}`}>
                    <Image
                      src="/wireframe-3.jpg"
                      alt="Wireframe 3"
                      width={800}
                      height={600}
                    />
                  </div>
                  <p className={stylesLifeCycle.caption}>API Post</p>
                  <div className={`${stylesLifeCycle.border}`}>
                    <Image
                      src="/wireframe-4.jpg"
                      alt="Wireframe 4"
                      width={800}
                      height={600}
                    />
                  </div>
                  <p className={stylesLifeCycle.caption}>Top 5 Blog Posts</p>
                  <div className={`${stylesLifeCycle.border}`}>
                    <Image
                      src="/wireframe-5.jpg"
                      alt="Wireframe 5"
                      width={800}
                      height={600}
                    />
                  </div>
                  <p className={stylesLifeCycle.caption}>Design Process</p>
                  <li className={stylesLifeCycle.listItem}>Step 4: Content</li>
                  <p className={stylesLifeCycle.description}>
                    Before posting my content, I created an outline &
                    rough-draft (just like writing something for school). I use
                    Notion, and wrote them down in my&nbsp;
                    <Link href="https://anthonyjdella.notion.site/What-is-an-API-146843ac831e485d89bd194b111b2d49">
                      <a className={`${styles.link} ${styles.link2}`}>
                        Notion notebook
                      </a>
                    </Link>
                  </p>
                  <li className={stylesLifeCycle.listItem}>
                    Step 5: Features & Flavor
                  </li>
                  <ul>
                    <li className={stylesLifeCycle.description}>
                      <Link href="/">
                        <a className={stylesLifeCycle.a}>Homepage</a>
                      </Link>
                      <ul>
                        <li className={stylesLifeCycle.description}>
                          Hover over the &quot;Welcome&quot; title, then click
                          it for a surprise!
                        </li>
                        <li className={stylesLifeCycle.description}>
                          Hover over the Cards to see a subtle animation.
                        </li>
                        <li className={stylesLifeCycle.description}>
                          Try viewing things on mobile and check out the 🍔
                          menu.
                        </li>
                      </ul>
                    </li>
                    <li className={stylesLifeCycle.description}>
                      <Link href="/about">
                        <a className={stylesLifeCycle.a}>About Page</a>
                      </Link>
                      <ul>
                        <li className={stylesLifeCycle.description}>
                          Check out how many hours I spend coding this website.
                          It updates in realtime based on my VSCode usage.
                        </li>
                      </ul>
                    </li>
                    <li className={stylesLifeCycle.description}>
                      <Link href="/my-top-5">
                        <a className={stylesLifeCycle.a}>My Top 5 Page</a>
                      </Link>
                      <ul>
                        <li className={stylesLifeCycle.description}>
                          Look at the fancy gradient borders of each blog post
                          (which are embedded in the page).
                        </li>
                      </ul>
                    </li>
                    <li className={stylesLifeCycle.description}>
                      <Link href="/my-top-5">
                        <a className={stylesLifeCycle.a}>This Page</a>
                      </Link>
                      <ul>
                        <li className={stylesLifeCycle.description}>
                          Why not click on the colorful images (way down below)
                          for a fun time?
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <br />
                  <li className={stylesLifeCycle.listItem}>Step 6: Iterate</li>
                  <p className={stylesLifeCycle.description}>
                    I always take an iterative approach to software development.
                    I strongly believe in creating a protoype, then building on
                    incrementally. When doing this, it&apos;s important to
                    document progress and make everything easy to understand.
                  </p>
                  <h3>Clean Commits & Incremetal Pushes</h3>
                  <div className={`${stylesLifeCycle.border}`}>
                    <Image
                      src="/github-commits.png"
                      alt="GitHub Commits"
                      width={600}
                      height={700}
                    />
                  </div>
                  <p className={stylesLifeCycle.caption}>
                    Clear, concise, and beautiful commit messages.
                  </p>

                  <h3>Incremetal Progress</h3>
                  <p className={stylesLifeCycle.description}>
                    Here, we can see how this site was built over time.
                  </p>
                  <div
                    className={`${stylesLifeCycle.border} ${stylesLifeCycle.border1}`}
                    onClick={this._confetti}
                  >
                    <Confetti
                      active={this.state.showComponent}
                      config={this.state.confettiConfig}
                    />
                    <Image
                      src="/deploy-1.png"
                      alt="Initial Homepage"
                      width={600}
                      height={500}
                    />
                  </div>
                  <div
                    className={`${stylesLifeCycle.border} ${stylesLifeCycle.border2}`}
                    onClick={this._confetti}
                  >
                    <Confetti
                      active={this.state.showComponent}
                      config={this.state.confettiConfig}
                    />
                    <Image
                      src="/deploy-2.png"
                      alt="Small Changes Homepage"
                      width={600}
                      height={500}
                    />
                    <Image
                      src="/right-arrow.svg"
                      alt="Right arrow"
                      width={300}
                      height={500}
                    />
                  </div>
                  <div
                    className={`${stylesLifeCycle.border} ${stylesLifeCycle.border3}`}
                    onClick={this._confetti}
                  >
                    <Confetti
                      active={this.state.showComponent}
                      config={this.state.confettiConfig}
                    />
                    <Image
                      src="/left-arrow.svg"
                      alt="Left arrow"
                      width={300}
                      height={500}
                    />
                    <Image
                      src="/deploy-3.png"
                      alt="Getting Better Homepage"
                      width={600}
                      height={500}
                    />
                  </div>
                  <div
                    className={`${stylesLifeCycle.border} ${stylesLifeCycle.border4}`}
                    onClick={this._confetti}
                  >
                    <Confetti
                      active={this.state.showComponent}
                      config={this.state.confettiConfig}
                    />
                    <Image
                      src="/deploy-4.png"
                      alt="More Features Homepage"
                      width={600}
                      height={500}
                    />
                    <Image
                      src="/right-arrow.svg"
                      alt="Right arrow"
                      width={300}
                      height={500}
                    />
                  </div>
                  <div
                    className={`${stylesLifeCycle.border} ${stylesLifeCycle.border5}`}
                    onClick={this._confetti}
                  >
                    <Confetti
                      active={this.state.showComponent}
                      config={this.state.confettiConfig}
                    />
                    <Image
                      src="/left-arrow.svg"
                      alt="Left arrow"
                      width={300}
                      height={500}
                    />
                    <Image
                      src="/deploy-5.png"
                      alt="Final Homepage"
                      width={600}
                      height={500}
                    />
                  </div>
                </ul>
              </article>

              <Footer />
            </main>
          </div>
        );
    }
}