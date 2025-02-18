// src/App.js
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Movies from "./page/Movie";
import Mylist from "./page/Mylist";
import Play from "./page/Play";
import Home from "./page/home";
import Modal from "./component/Modal";
import Register from "./component/registerModal";
import GenreMovie from "./page/GenreMovie";
import User from "./page/User";
import Subcribe from "./page/Subcribe";



const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }
    const [isModalOpenRegister, setIsModalOpenRegister] = useState(false);

    const openModalRegister = () => {
        setIsModalOpenRegister(true);
    }

    const closeModalRegister = () => {
        setIsModalOpenRegister(false);
    }

    return (
        <>
            <Navbar openModal={openModal} openModalRegister={openModalRegister}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie" element={<Movies />} />
                <Route path="/mylist" element={<Mylist />} />
                <Route path="/play/:id" element={<Play openModal={openModal} />} />
                <Route path="/genre/:id" element={<GenreMovie />} />
                <Route path="/user/" element = {<User />} />
                <Route path="/subcribe" element ={<Subcribe />}/>
            </Routes>
            <Footer />
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <Register isOpenRegister={isModalOpenRegister} onCloseRegister={closeModalRegister}/>
        </>
    );
}

export default App;
