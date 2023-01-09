import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,  /*ключ: значение, за profilePage отвечает profileReducer*/
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});


let store = legacy_createStore(reducers); // создаем store

export default store;