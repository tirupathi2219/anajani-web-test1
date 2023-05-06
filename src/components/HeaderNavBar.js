 import { NavLink,Link, Outlet } from "react-router-dom";
 import "./css/HeaderNavBar.css"
 function HeaderNavBar(){
    return(
        <>
        <div id="navbar" className="d-flex justify-content-around">
           <NavLink to="/">Home</NavLink> 
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contactus">Contact Us</NavLink>
        </div>
        <Outlet/>
        </>
    )
 }
 export default HeaderNavBar;