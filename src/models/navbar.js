export default class Navbar{
    constructor(data){
        this.id=data.id;
        this.name=data.name;
        this.navigateTo=data.navigateTo;
        this.protectedRoutes=data.protectedRoutes;
    }
}
export const getNavbarList=()=>{
    let navbarList=[
        new Navbar({
            "id":"home",
            "name":"Home",
            "navigateTo":"#",
            "protectedRoutes":false
        }),
        new Navbar({
            "id":"addProduct",
            "name":"AddProduct",
            "navigateTo":"#",
            "protectedRoutes":false
        }),
        new Navbar({
            "id":"allProducts",
            "name":"AllProducts",
            "navigateTo":"#",
            "protectedRoutes":false
        }),
        new Navbar({
            "id":"logout",
            "name":"Logout",
            "navigateTo":"#",
            "protectedRoutes":false
        }),
    ];

    return navbarList;
}

