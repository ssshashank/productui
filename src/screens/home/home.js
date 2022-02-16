import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Navbar from "../../components/navbar/navbar";
import homeStyles from "./style.module.css";


const HomeScreen = () => {

    return (
        <div>
            <Navbar />
            <div class={homeStyles.home} >
                <h1>Manage your product</h1>
            </div>
        </div>

    );
}
export default HomeScreen;