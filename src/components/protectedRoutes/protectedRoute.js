import { Redirect, Route } from "react-router-dom";
import Routes from "../../constants/routes";


function ProtectedRoute({ isAuth, Component, ...rest }) {
    
    return (
        <Route
            {...rest}
            render={(props) => {
                if (isAuth) return <Component {...props} />
                if (!isAuth) return <Redirect to={{ path: Routes.LANDINGROUTE, state: { from: props.location } }} />
            }
            }
        />
    );
}

export default ProtectedRoute;