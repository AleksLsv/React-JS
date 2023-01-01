import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


function DialogItem(props) {

    let path = "/dialogs/" + props.id;

    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    );
}

function Message(props) {
    return (
        <div className={s.message}>{props.message}</div>
    );

}

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    <DialogItem name="Dimych" id="1"> </DialogItem>
                    <DialogItem name="Andrey" id="2"> </DialogItem>
                    <DialogItem name="Sveta" id="3"> </DialogItem>
                    <DialogItem name="Sasha" id="4"> </DialogItem>
                    <DialogItem name="Viktor" id="5"> </DialogItem>
                    <DialogItem name="Valera" id="6"> </DialogItem>
            </div>

            <div className={s.messages}>
                <Message message = "Hi"></Message>
                <Message message = "How are you?"></Message>
                <Message message = "Yo"></Message>
                <Message message = "Yo"></Message>
                <Message message = "Yo"></Message>
            </div>

        </div>
    );
}
export default Dialogs;