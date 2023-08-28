import React from 'react';
import s from './Header.module.css'

const Header = () => (
    <header className={s.header}>
        <img className={s.logo} src='https://www.logodesign.net/images/nature-logo.png' alt='Logo'/>
        <ul className={s.ul}>
            <li className={s.li}>
                <a href='#'>Profile</a>
            </li>
            <li>
                <a href='#'>Dialogs</a>
            </li>
            <li>
                <a href='#'>Services</a>
            </li>
            <li>
                <a href='#'>Contacts</a>
            </li>
        </ul>
    </header>
);

export default Header;