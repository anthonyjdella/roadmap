import Image from 'next/image'
import Link from 'next/link'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/Menu.module.css'

export default function Menu({children}) {

    const [isOpen,setIsOpen] = useState(false);
    const openMenu= ()=> setIsOpen(!isOpen);

    return(
            <header>
                <nav className={styles.navbar}>
                    <Link href='/'>
                     <a>
                         <Image src="/anthony-logo.png" alt="Anthony Dellavecchia Logo" width={102} height={64}/>
                         <Image src="/anthonyapi.png" alt="AnthonyAPI Learn" width={224} height={56}/>
                     </a>
                    </Link>
                <ul className={isOpen === false ? 
                        styles.navmenu : styles.navmenu +' '+ styles.active}>
                    <li className={styles.navitem}>
                       <Link href='/'>
                         <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>Home</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/about'>
                          <a className={isOpen === false ? 
                                    styles.navlink : styles.navlink+' '+styles.active}
                                    onClick={openMenu}>About</a>
                        </Link>
                    </li>
                </ul>
                <Link href="https://twitter.com/anthonyjdella">
                    <a className={`${styles.link} ${styles.twitter}`}>
                        <FontAwesomeIcon icon={faTwitter}/>
                        &nbsp;@AnthonyJDella
                    </a>
                </Link>
                <button className={isOpen === false ? 
                                    styles.hamburger : styles.hamburger+' '+styles.active}
                                    onClick={openMenu}
                                    >
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                    <span className={styles.bar}></span>
                </button>
                </nav>
            {children}
            </header>

    )
}