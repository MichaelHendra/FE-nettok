import { Link } from "react-router-dom";
import cssModule from "./Navbar.module.css";
//images
import Logo from "../assets/Logo.png"
import Cari from "../assets/search.png"
import Bell from "../assets/bell.png"


function Navbar () {
return (
    <div className={cssModule.sNavbar}>
        <nav>
            <ul>
                <li><Link to="/"><img src={Logo} alt="Logo" className={`${cssModule.LinkNav} ${cssModule.logo}`}/></Link></li>
                <li><Link to="/" className={cssModule.LinkNav}>Home</Link></li>
                <li><Link to="/movie" className={cssModule.LinkNav}>Movies</Link></li>
                <li><Link to='/mylist' className={cssModule.LinkNav}>My List</Link></li>
                <li className={cssModule.kanan}><button className={cssModule.btn}>Login</button></li>
                <li className={`${cssModule.kanan} ${cssModule.LinkNav}`}><Link to="/"><img src={Bell} alt="bell" className={cssModule.Sd}/></Link></li>
                <li className={`${cssModule.kanan} ${cssModule.LinkNav}` }><Link to="/"><img src={Cari} alt="cari" className={cssModule.Sd}/></Link></li>
            </ul>
        </nav>
    </div>
);
}
export default Navbar;