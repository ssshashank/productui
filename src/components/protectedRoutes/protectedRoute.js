import { Redirect, Route } from "react-router-dom";
import Routes from "../../constants/routes";


function ProtectedRoute({isAuth,Component, ...rest }) {

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? <Component /> : <Redirect to={{ pathname: Routes.LOGINROUTE, state: { from: props.location } }} />
            }
        />
    );
}

export default ProtectedRoute;