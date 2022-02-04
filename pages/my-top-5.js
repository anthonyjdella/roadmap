import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'

export default function MyTop5() {
    return (
        <div className={styles.container}>
            <Meta/>
            
            <h1>My Top 5</h1>
            <Footer/>
        </div>
    )
}