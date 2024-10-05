import fbIcon from "./assets/images/icon-facebook.svg"
import xIcon from "./assets/images/icon-twitter.svg"
import pinIcon from "./assets/images/icon-pinterest.svg"
import instaIcon from "./assets/images/icon-instagram.svg"


function Footer(){
    return(
        <footer>
            <div className="boost">
                <h2>Boost your links today</h2>
                <a className="start-button" href="#start">Get Started</a>
            </div>

            <div className="footer-links">
                <h3>Shortly</h3>
                <div className="features">
                    <h5>Features</h5>
                    <ul>
                        <li><a href="#link">Link Shortening</a></li>
                        <li><a href="#branded">Branded Links</a></li>
                        <li><a href="#analytics">Analystics</a></li>
                    </ul>
                </div>

                <div className="resources">
                    <h5>Resources</h5>
                    <ul>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#developers">Developers</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </div>

                <div className="company">
                    <h5>Company</h5>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#team">Our Team</a></li>
                        <li><a href="#careers">Careers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="icon-links">
                    <img src={fbIcon}></img>
                    <img src={xIcon}></img>
                    <img src={pinIcon}></img>
                    <img src={instaIcon}></img>
                </div>
            </div>
        </footer>
    )
};

export default Footer