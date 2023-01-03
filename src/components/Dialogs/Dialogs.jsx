import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


function Dialogs(props) {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessagesElement = React.createRef();

    function addMessage() {
        let text = newMessagesElement.current.value;
        alert(text);
    }



    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            <div className={s.messages}>

                {messagesElements}

            <div>
                <textarea ref = {newMessagesElement}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send</button>
            </div>



            </div>
        </div>
    );
}

export default Dialogs;