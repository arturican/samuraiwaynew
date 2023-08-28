import React from 'react';
import s from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <nav className={s.nav}>
        <ul>
            <li>
                <NavLink
                    to={'/profile'}
                    style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "gold" : "",
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/dialogs'}
                    style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "gold" : "",
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Dialogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/services'}
                    style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "gold" : "",
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink
                    to={'/contacts'}
                    style={({isActive, isPending}) => {
                        return {
                            color: isActive ? "gold" : "",
                            fontWeight: isActive ? "bold" : "",
                        };
                    }}
                >
                    Contacts
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;