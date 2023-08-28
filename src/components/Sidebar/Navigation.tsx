import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <nav className={s.nav}>
        <ul>
            <li>
               <NavLink to={'/profile'}>Profile</NavLink>
            </li>
            <li>
                <NavLink to={'/dialogs'}>Dialogs</NavLink>
            </li>
            <li>
                <a href='#'>Services</a>
            </li>
            <li>
                <a href='#'>Contacts</a>
            </li>
        </ul>
    </nav>
);

export default Navigation;