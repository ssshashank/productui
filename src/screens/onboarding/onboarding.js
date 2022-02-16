
import { useLocation } from 'react-router';
import ProtectedRoute from '../../components/protectedRoutes/protectedRoute';
import Routes from '../../constants/routes';
import HomeScreen from '../home/home';
import LoginScreen from '../login/login';
import SignupScreen from '../signup/signup';
import onboardingStyles from "./style.module.css";

const Onboarding = () => {
    
    const location=useLocation();

    return (
        location.pathname===Routes.HOMEROUTE?
        <ProtectedRoute exact path={Routes.HOMEROUTE}><HomeScreen/></ProtectedRoute>:
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