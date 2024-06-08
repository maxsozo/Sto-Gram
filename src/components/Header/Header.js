import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.headerLogo}>Sto-Gram</div>
            <input type="text" placeholder="Пошук" className={styles.headerSearch}/>
            <nav className={styles.headerWrapper}>
                <img src='images/icons/home.png' alt='ico' className={styles.headerItem}></img>
                <img src='images/icons/send.png' alt='ico' className={styles.headerItem}></img>
                <img src='images/icons/explore.png' alt='ico' className={styles.headerItem}></img>
                <img src='images/icons/heart.png' alt='ico' className={styles.headerItem}></img>
                <img alt='ico' className={styles.headerItem}></img>
            </nav>
        </header>
    )
}



export default Header;