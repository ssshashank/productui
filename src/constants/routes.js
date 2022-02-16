import HomeScreen from "../screens/home/home";
import LoginScreen from "../screens/login/login";

export default class Routes{
    static SPLASHROUTE="/splash";
    static LANDINGROUTE="/";
    static AUTHROUTE="/auth";
    static LOGINROUTE="/login";
    static SIGNUPROUTE="/signup";
    static HOMEROUTE="/home";
    static PROFILEROUTE="/profile";
    static ADDPRODUCTSROUTE="/addProducts";
    static ALLPRODUCTSROUTE="/allProducts";
    static PAGENOTFOUNDROUTE="/pagenotfound";
    static NETWORKERRORROUTE="/networkissue";
    static OVERVIEWROUTE="/overview";
    static LOGOUTROUTE="/LOGOUT"
}

export const navigateToComponent={
    // [Routes.HOMEROUTE]:HomeScreen,
    [Routes.ADDPRODUCTSROUTE]:null,
    [Routes.ALLPRODUCTSROUTE]:null,
    [Routes.LOGOUTROUTE]:LoginScreen
}