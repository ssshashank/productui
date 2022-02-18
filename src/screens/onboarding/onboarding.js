
import { useLocation } from 'react-router';
import ProtectedRoute from '../../components/protectedRoutes/protectedRoute';
import Routes from '../../constants/routes';
import HomeScreen from '../home/home';
import LoginScreen from '../login/login';
import SignupScreen from '../signup/signup';
import onboardingStyles from "./style.module.css";
import { Link } from "react-router-dom";
const Onboarding = () => {
    
    const location=useLocation();
    const isAuth=false
    return (
       /*  location.pathname===Routes.HOMEROUTE ?
        <ProtectedRoute path={Routes.HOMEROUTE} component={HomeScreen} isAuth={isAuth}/>: */
        <div className={onboardingStyles.container}>
            <div className={onboardingStyles.descriptionSection}>
                <Link to="/" className={onboardingStyles.descriptionSectionHeader}>
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