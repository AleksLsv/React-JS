import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Navigate to={'/login'}/>
            }
            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
return ConnectedAuthRedirectComponent;
}



export function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigateTo = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigateTo, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}




export const withNavigate = (Component) => {
    return (props) => {
        return < Component {...props} navigate={useNavigate()}/>
    };
}
