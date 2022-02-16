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

function App() {
  return (
    <Router>
      <Switch>
          <Route path={Routes.LANDINGROUTE}> <Onboarding/> </Route>
          <Route path={Routes.LOGINROUTE}> <Onboarding/> </Route>
          <Route path={Routes.SIGNUPROUTE}><Onboarding/></Route>
          <Route path={Routes.HOMEROUTE}><HomeScreen/></Route>
        </Switch>
    </Router>
  );
}

export default App;
