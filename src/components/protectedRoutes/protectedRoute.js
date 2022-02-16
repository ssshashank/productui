import { Redirect,Route } from "react-router-dom";
import Routes from "../../constants/routes";
import { userLocalData } from '../../utils/userUtils';


function ProtectedRoute({ component: Component, ...restOfProps }) {
    const isAuthenticated = userLocalData.getLocal("USER");
    //   const isAuthenticated = localStorage.getItem("isAuthenticated");
    console.log("this", isAuthenticated);

    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to={Routes.LOGINROUTE} />
            }
        />
    );
}

export default ProtectedRoute;