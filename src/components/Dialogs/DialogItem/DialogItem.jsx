import React from "react";
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {

    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink to={path} className = {name => name.isActive ? s.active : s.dialog }> {props.name}  </NavLink>
        </div>
    );
}

export default DialogItem;