import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Routes from './constants/routes';
import Onboarding from './screens/onboarding/onboarding';
import HomeScreen from './screens/home/home';
import './App.css';
import ProtectedRoute from "./components/protectedRoutes/protectedRoute";
import { Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={Routes.LANDINGROUTE} component={Onboarding} />
        <Route exact path={Routes.SIGNUPROUTE} component={Onboarding}></Route>
        <Route exact path={Routes.HOMEROUTE} component={HomeScreen} />
        <Redirect to="/"/>
        {/* <Route path={Routes.LOGINROUTE}> <Onboarding/> </Route>
          <Route path={Routes.SIGNUPROUTE}><Onboarding/></Route>
          <ProtectedRoute path={Routes.HOMEROUTE} component={HomeScreen} isAuth={isAuth}/> */}
      </Switch>
    </Router>
  );
}

export default App;
