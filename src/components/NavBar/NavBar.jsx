import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


function NavBar() {
    let navDataIsActive = navData => navData.isActive ? s.active : s.item;

    let linksData = [
        {url: 'profile', navBarItem: 'Profile'},
        {url: 'dialogs', navBarItem: 'Messages'},
        {url: 'users', navBarItem: 'Users'},
        {url: 'news', navBarItem: 'News'},
        {url: 'music', navBarItem: 'Music'},
        {url: 'settings', navBarItem: 'Settings'}
    ];

    let linkElements = linksData.map(el => {
        return (
            <div>
                <NavLink to = {'/' + el.url}  className={navDataIsActive}> {el.navBarItem} </NavLink>
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