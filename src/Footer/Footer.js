import React from 'react';
import logo from '../assets/logo.png';
import styles from './Footer.module.css';

export function Footer(props) {
    return (
        <div className={styles['footer']}>
            <div>
            <img src={logo} className={styles.logo} alt='belb logo' />
            </div>
           Made with&nbsp;<i className="fas fa-heart"></i>&nbsp;by Leonel
        </div>
    );
}