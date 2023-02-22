import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    //<React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    //</React.StrictMode>
)




/*let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    )
}

rerenderEntireTree(store.getState());*/

/*store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// сделали callback, в функцию subscribe из state вставляем функцию перерисовки
// дерева rerenderEntireTree
