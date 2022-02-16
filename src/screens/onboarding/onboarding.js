
import { useLocation } from 'react-router';
import ProtectedRoute from '../../components/protectedRoutes/protectedRoute';
import Routes from '../../constants/routes';
import HomeScreen from '../home/home';
import LoginScreen from '../login/login';
import SignupScreen from '../signup/signup';
import onboardingStyles from "./style.module.css";

const Onboarding = () => {
    
    const location=useLocation();
    const isAuth=false
    return (
        location.pathname===Routes.HOMEROUTE ?
        <ProtectedRoute path={Routes.HOMEROUTE} component={HomeScreen} isAuth={true}/>:
        <div className={onboardingStyles.container}>
            <div className={onboardingStyles.descriptionSection}>
                <p className={onboardingStyles.descriptionSectionHeader}>
                    <b>Product Management</b>
                </p>
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