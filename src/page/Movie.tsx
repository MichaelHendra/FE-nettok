import React from "react";
import cssModule from "./Movie.module.css"
//Image
import Gambar from "../assets/gambar1.png"

function Movies(){
    return(
        <div className={cssModule.BG}>
            <div>
                <div>
                    <h1 className={cssModule.h1}>Movie</h1>
                </div>
                <div>
                    <div className={cssModule.cardContainer}>
                        <div className={cssModule.cardMovie}>
                            <img src={Gambar} alt="Image"/>
                            <div className={cssModule.info}>
                                <div className={cssModule.title}>Kirik</div>
                                <div className={cssModule.details}>Kirik Ireng</div>
                            </div>
                            <div className={cssModule.duration}>1:40:1</div>
                        </div>
                        <div className={cssModule.cardMovie}>
                            <img src={Gambar} alt="Image"/>
                            <div className={cssModule.info}>
                                <div className={cssModule.title}>Kirik</div>
                                <div className={cssModule.details}>Kirik Ireng</div>
                            </div>
                            <div className={cssModule.duration}>1:40:1</div>
                        </div>
                        <div className={cssModule.cardMovie}>
                            <img src={Gambar} alt="Image"/>
                            <div className={cssModule.info}>
                                <div className={cssModule.title}>Kirik</div>
                                <div className={cssModule.details}>Kirik Ireng</div>
                            </div>
                            <div className={cssModule.duration}>1:40:1</div>
                        </div>
                        <div className={cssModule.cardMovie}>
                            <img src={Gambar} alt="Image"/>
                            <div className={cssModule.info}>
                                <div className={cssModule.title}>Kirik</div>
                                <div className={cssModule.details}>Kirik Ireng</div>
                            </div>
                            <div className={cssModule.duration}>1:40:1</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies