import React from 'react';
import styles from "./Banner.module.scss"
import icon1 from "../../assets/icon1.svg"
import icon2 from "../../assets/icon2.svg"
import icon3 from "../../assets/icon3.svg"
import icon4 from "../../assets/icon4.svg"

function Banner(props) {
    return (
        <div>
            <ul className={styles.Banner} >
                <li><img src={icon1} alt="yoga" /></li>
                <li><img src={icon2} alt="natation" /></li>
                <li><img src={icon3} alt="velo" /></li>
                <li><img src={icon4} alt="musculation" /></li>
                <li>Copiryght, SporSee2020</li>
            </ul>

        </div>
       
        
    );
}

export default Banner;