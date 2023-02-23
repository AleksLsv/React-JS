import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "./hoc/HOCs";



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>

               {/* <Route path="/profile/*" element={<ProfileContainer />}/>*/}

                            <Route path="/messages/*" element={<DialogsContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginPage/>}/>
                        </Routes>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose (
    connect(mapStateToProps, {initializeApp}),
    //withRouter
) (App);
