import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss'
import logo from "../../assets/logo.png"
Header.propTypes = {
    
};

function Header(props) {
    return (
        <nav className={styles.HeaderContainer} >

            <ul className= {styles.HeaderUl}>
                <li>
                    <img src={logo} alt="logo sportSee" />
                </li>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglages</li>
                <li>Communauté</li>
            </ul>
        </nav>
    );
}

export default Header;