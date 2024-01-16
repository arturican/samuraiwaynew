import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";
import {S} from '../markUp/__style'

const Navigation = () => (
    <nav className={s.nav}>
        <ul>
            <li>
                <S.NavWrapper><NavLink  to={'/profile'}>Profile</NavLink></S.NavWrapper>
            </li>
            <li>
                <S.NavWrapper><NavLink to={'/dialogs'}>Dialogs</NavLink></S.NavWrapper>
            </li>
        </ul>
    </nav>
);

export default Navigation;
