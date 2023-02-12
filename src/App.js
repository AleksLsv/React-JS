import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


function App() {
  return (
      <BrowserRouter>
    <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>
            <Routes>
                <Route path="/profile/:userId" element={<ProfileContainer />}/>
                <Route path="/profile/*" element={<ProfileContainer />}/>
                <Route path="/messages/*" element={<DialogsContainer />}/>
                <Route path="/users" element={<UsersContainer />}/>
                <Route path="/login" element={<LoginPage />}/>
            </Routes>

        </div>
    </div>
   </BrowserRouter>
  );
}

export default App;
