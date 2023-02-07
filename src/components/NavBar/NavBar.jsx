import React from "react";
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";


function NavBar() {
    let navDataIsActive = navData => navData.isActive ? s.active : s.item;

    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile" className = {navDataIsActive}> Profile </NavLink>
            </div>

            <div>
                <NavLink to="/dialogs" className = {navDataIsActive }> Messages </NavLink>
            </div>

            <div>
                <NavLink to="/users" className = {navDataIsActive}> Users </NavLink>
            </div>

            <div>
                <NavLink to="/news" className = {navDataIsActive}> News </NavLink>
            </div>

            <div>
                <NavLink to="/music" className = {navDataIsActive}> Music </NavLink>
            </div>
            <div>
                <NavLink to="/settings" className = {navDataIsActive}> Settings </NavLink>
            </div>


        </nav>
    );
}

export default NavBar;