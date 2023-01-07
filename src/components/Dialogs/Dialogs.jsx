import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


function Dialogs(props) {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }


 /*   let newMessagesElement = React.createRef();

    function addMessage() {
        let text = newMessagesElement.current.value;
        alert(text);
    }*/



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