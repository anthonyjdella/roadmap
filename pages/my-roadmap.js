import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'

export default function MyRoadmap() {
    return(
        <div className={styles.container}>
            <Meta/>

            <h1 className={styles.title}>My Roadmap</h1>
            <Footer/>
        </div>
    )
}