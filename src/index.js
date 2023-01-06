import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {subscribe, updateNewPostText} from "./redux/state";
import {addPost} from "./redux/state";

//addPost('SamuraiJS.com');

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText = {updateNewPostText}/>
        </React.StrictMode>
    );
}


rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

subscribe(rerenderEntireTree);

// сделали callback, в функцию subscribe из state вставляем функцию перерисовки
// дерева rerenderEntireTree
