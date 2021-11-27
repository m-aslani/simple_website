import React from 'react';
import styles from "./Banner.module.css";
import background from "../images/background.jpg";

function Banner() {
    return (
        <div className={styles.backgroundContainer}>
            <img src={background} alt="background" className={styles.background}/>
            <div className={styles.textContainer}>
                <h1>Look at this!</h1>
                <p>it's <span>BEAUTIFUL</span></p>
            </div>
        </div>
    )
}

export default Banner
