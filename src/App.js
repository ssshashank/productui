import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import {useState} from 'react'
import Routes from './constants/routes';
import Onboarding from './screens/onboarding/onboarding';
import HomeScreen from './screens/home/home';
import './App.css';
import ProtectedRoute from "./components/protectedRoutes/protectedRoute";
import { userLocalData } from "./utils/userUtils";

function App() {
  // const isAuth = userLocalData.getLocal("USER");
  const [isAuth, setisAuth] = useState(true)
  return (
    <Router>
      
          <Route path={Routes.LANDINGROUTE}> <Onboarding/> </Route>
          <Route path={Routes.LOGINROUTE}> <Onboarding/> </Route>
          <Route path={Routes.SIGNUPROUTE}><Onboarding/></Route>
          {/* <Route path={Routes.HOMEROUTE}><HomeScreen/></Route> */}
          {/* <ProtectedRoute path={Routes.HOMEROUTE} component={HomeScreen} isAuth={isAuth}/> */}
        {/* </Switch> */}
        <ProtectedRoute path={Routes.HOMEROUTE} component={HomeScreen} isAuth={isAuth}/>
    </Router>
  );
}

export default App;
