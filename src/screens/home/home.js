import {  Redirect } from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import Routes from "../../constants/routes";
import { userLocalData } from "../../utils/userUtils";
import homeStyles from "./style.module.css";


const HomeScreen = () => {
    let isAuth=userLocalData.getLocal("USER")
    if(!isAuth){
        return <Redirect to={Routes.LANDINGROUTE}/>
    }
    return (
        <div>
            <Navbar />
            <div className={homeStyles.home} >
                <h1>Manage your product</h1>
            </div>
        </div>

    );
}
export default HomeScreen