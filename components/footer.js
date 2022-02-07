import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <a
            href="https://anthonydellavecchia.com"
            target="_blank"
            rel="noopener noreferrer"
            >
            Wanna learn more? <br/>Check out my website &rarr;
            <span>
                <Image src="/menu/anthony-logo.png" alt="Anthony Dellavecchia Logo" width={102} height={64} />
            </span>
            </a>
        </footer>
    )
}
