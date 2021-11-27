import React from 'react'
import styles from "./Header.module.css";
import logo from "../images/logo.jpg";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.listContainer}>
                <ul className={styles.lists}>
                    <li>HOME</li>
                    <li>PRODUCT</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Header;