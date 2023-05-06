import Logo from "../assets/Logo.jpeg"
import "./css/Header.css"
function Header() {
  return (
    <div className="d-flex justify-content-around header-container align-items-center">
    <div className="App d-flex  align-items-center">
        <img src={Logo} className="App-logo" alt="logo" />
        <label className="header-title">ANJANI ENTERPRISES</label>
      
       
    </div>
    <div>
        <div><label>Mobile : 8985360054</label></div>
        <div><label>Email  : pallavamechineryparts@gmail.com</label></div>
    </div>
    </div>
  );
}

export default Header;
