import React from "react";
import Profile from "./Profile";
//import axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
//import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
//import {userAPI} from "../../api/api";


class ProfileContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.router.params.userId;

        if (!userId)
        {userId = 27596}  //2

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);

        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)*/
        /*userAPI.getProfile(userId).then(response => {
                this.props.setUserProfile(response.data);
            });*/

    }

    render() {
        return (
            <Profile {...this.props} profile ={this.props.profile} status = {this.props.status}
                     updateStatus = {this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)


/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (withRouter(AuthRedirectComponent));*/
