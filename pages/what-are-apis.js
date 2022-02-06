import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'

export default function WhatIsRapidApi() {
    return (
        <div className={styles.container}>
            <Meta />

            <main className={styles.main}>
                <h1 className={styles.title}>What are APIs?</h1>

                <Footer />
            </main>
        </div>
    );
}