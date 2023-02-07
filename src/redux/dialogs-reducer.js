//const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dagmar'},
        {id: 2, name: 'Ingmar'},
        {id: 3, name: 'Tom'},
        {id: 4, name: 'Kaidi'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Kaisa'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]
}



const dialogsReducer =(state = initialState, action) => {

   // let stateCopy;
    switch (action.type) {
        /*case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };*/
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages : [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

/*export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text})*/

export default dialogsReducer;