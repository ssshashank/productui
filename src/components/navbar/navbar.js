import { Link } from "react-router-dom";
import Routes from "../../constants/routes";
import { getNavbarList } from "../../models/navbar"
import navbarStyles from "./style.module.css";
const Navbar = () => {
    const getNavbar = getNavbarList();
    return (
        <div className={navbarStyles.navbarContainer} >
            <div className={navbarStyles.navbarBody}>
                <div className={navbarStyles.navbarTitle}>
                <Link className={navbarStyles.navbarTitle} to={Routes.LANDINGROUTE} ><h2>Product Management</h2></Link>
                </div>
                <div className={navbarStyles.navbarList}>
                    {
                        getNavbar.map((item, key) => {
                            return (
                                <h4 className={navbarStyles.navbarListItem}key={item.id}>{item.name}</h4>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar