import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


function NavBar() {
    let navDataIsActive = navData => navData.isActive ? s.active : s.item;

    let linksData = [
        'profile', 'messages', 'users', 'news', 'music', 'settings'
    ];

    let linkElements = linksData.map(el => {
        return (
            <div key={el}>
                <NavLink to={'/' + el}
                         className={navDataIsActive}> {el.replace(el[0], el[0].toUpperCase())} </NavLink>
            </div>
        )
    });

    return (
        <nav className={s.nav}>
            {linkElements}
        </nav>
    );
}

export default NavBar;