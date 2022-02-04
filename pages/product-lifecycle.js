import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'

export default function ProductLifecycle() {
    return (
        <div className={styles.container}>
            <Meta/>

            <h1>Product Lifecycle</h1>

            <h2>Features</h2>
                <h3>Homepage</h3>
                <ul>
                    <li>Similar look to <a href="https://rapidapi.com/learn">RapidAPI.com/learn</a></li>
                        <li>Even hover animation transforms up</li>
                </ul>
            <Footer/>
        </div>
    )
}