import logo from "./assets/images/logo.svg"
import openbtn from "./assets/images/icon-menu.svg"
import closebtn from "./assets/images/icon-menu-close.svg"

function Navbar(){
    function navFunction() {

        let x = document.getElementById("links");
        if (x.style.display === "none") {
          x.style.display = "flex";
        } else {
          x.style.display = "none";
        }
      }
    return(
        <header id="navbar">
            <div className="topnav">
                <a className="logo" href="#home"><img src={logo} /></a>
                <a id="nav-btn" onClick={navFunction}><img src={openbtn} /></a>

                <div id="links">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#resources">Resources</a>
                    <div className="topnav-right">
                        <a href="#login">Login</a>
                        <a href="#signup">Sign Up</a>
                    </div>
                </div>
            </div>

            
        </header>
    )
};

export default Navbar