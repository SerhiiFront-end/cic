import { Link } from 'react-router-dom'

import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.navigation}>
                <ul className={styles.listMenu}>
                   <Link className={styles.LinkItem} to={"/"}><li className={styles.ListItem}>Home</li></Link>
                   <Link className={styles.LinkItem} to={"/about"}><li className={styles.ListItem}>About Us</li></Link>
                   <Link className={styles.LinkItem} to={"/aboutProject"}><li className={styles.ListItem}>Our Project</li></Link>
                   <Link className={styles.LinkItem} to={"/shop"}><li className={styles.ListItem}>Our Shop</li></Link>
                   <Link className={styles.LinkItem} to={"/help"}><li className={styles.ListItem}>Events</li></Link>
                   <Link className={styles.LinkItem} to={"/donate"}><li className={styles.ListItem}>Donate</li></Link>
                   <Link className={styles.LinkItem} to={"/involved"}><li className={styles.ListItem}>Get Involved</li></Link>
                   <Link className={styles.LinkItem} to={"/contact"}><li className={styles.ListItem}>Contact Us</li></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header