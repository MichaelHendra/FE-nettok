import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import cssModule from "./Navbar.module.css";
//images
import Logo from "../assets/Logo.png"
import Cari from "../assets/search.png"
import Bell from "../assets/bell.png"
//pages
import Home from "../page/home";
import Movies from "../page/Movie";

function Navbar () {
return (
    <div className={cssModule.sNavbar}>
        <nav>
            <Router>
            <ul>
                <li><Link to="/"><img src={Logo} alt="Logo" className={cssModule.logo}/></Link></li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movie">Movies</Link></li>
                <li><Link to="/new">New</Link></li>
                <li><Link to='/mylist'>My List</Link></li>
                <li className={cssModule.kanan}><button className={cssModule.btn}>Login</button></li>
                <li className={cssModule.kanan}><Link to="/"><img src={Bell} alt="bell" className={cssModule.Sd}/></Link></li>
                <li className={cssModule.kanan}><Link to="/"><img src={Cari} alt="cari" className={cssModule.Sd}/></Link></li>
            </ul>
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/movie" element = {<Movies/>} />
            </Routes>
            </Router>
        </nav>
        
    </div>
);
}
export default Navbar;