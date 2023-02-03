import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (<header className={s.header}>
        <img
            src='https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-design_460848-8717.jpg?w=3000'/>
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Log out </button> </div>
                : <NavLink to={'/login'}>Login</NavLink>}
        </div>
    </header>);
}

export default Header;