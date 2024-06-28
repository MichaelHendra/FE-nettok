import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Movies from "./page/Movie";
import Mylist from "./page/Mylist";
import Play from "./page/Play";
import Home from "./page/home";

const App = () => {
    return (
            <>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie" element={<Movies />} />
                    <Route path="/mylist" element={<Mylist />} />
                    <Route path="/play" element={<Play />} />
                </Routes>
                <Footer />
            </>
    );
}

export default App;
