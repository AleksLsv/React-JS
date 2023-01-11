import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


function Dialogs(props) {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={s.messages}>

                <div>  {messagesElements} </div>

            <div>
                <textarea value={newMessageBody}
                          onChange={onNewMessageChange}
                    placeholder='Enter your message'></textarea>
            </div>
            <div>
                <button onClick={onSendMessageClick}>Send</button>
            </div>



            </div>
        </div>
    );
}

export default Dialogs;