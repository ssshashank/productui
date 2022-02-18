import { useLocation } from 'react-router';
import ProtectedRoute from '../../components/protectedRoutes/protectedRoute';
import Routes from '../../constants/routes';
import HomeScreen from '../home/home';
import LoginScreen from '../login/login';
import SignupScreen from '../signup/signup';
import onboardingStyles from "./style.module.css";
import { Link } from "react-router-dom";
import { userLocalData } from '../../utils/userUtils';
import { Redirect } from 'react-router-dom';
const Onboarding = () => {
    
    const location=useLocation();
    let isAuth=userLocalData.getLocal("USER")
    if(isAuth){
        return <Redirect to={Routes.HOMEROUTE}/>
    }
    return (
        <div className={onboardingStyles.container}>
            <div className={onboardingStyles.descriptionSection}>
                <Link to={Routes.LANDINGROUTE} className={onboardingStyles.descriptionSectionHeader}>
                <b>Product Management</b>
                </Link>
            </div>
            {
                location.pathname===Routes.SIGNUPROUTE?
                <SignupScreen/>:
                <LoginScreen/>
            }
        </div>
        
    )
}

export default Onboarding