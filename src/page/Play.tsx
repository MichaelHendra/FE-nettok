import ReactPlayer from "react-player";
import cssModul from "./Play.module.css"
//image
import Gambar1 from "../assets/gambar1.png"
import Video1 from "../videos/2022-11-03 08-56-24.mp4"

function Play () {
return(
 <div className={cssModul.bgPlay}>
    <h1 className={cssModul.h1Judul}>Judul Vid</h1>
    <div className={cssModul.playVideo}>
        <div className={cssModul.Video}>
            <ReactPlayer 
             className = {cssModul.player}
             url ={Video1}
             width='1024'
             height='720'
             controls
            />
        </div>

        <div className={cssModul.LinePlay}>
            <div className={cssModul.LinePlayKiri}>
                <h3 className={cssModul.Desk}>asd</h3>
                <p className={cssModul.Desk}>asddsa</p>
            </div>
            <div className={cssModul.LinePlayKanan}>
                <h1>kanan</h1>
            </div>
        </div>
    </div>
    <div className={cssModul.playVideo}>
    <div className={cssModul.more}>
    <div className={cssModul.cardContainer}>
        <div className={cssModul.cardMovie}>
            <img src={Gambar1} alt="Image"/>
            <div className={cssModul.info}>
            <div className={cssModul.title}>Kirik</div>
            <div className={cssModul.details}>Kirik Ireng</div>
        </div>
            <div className={cssModul.duration}>1:40:1</div>
        </div>
        <div className={cssModul.cardMovie}>
            <img src={Gambar1} alt="Image"/>
            <div className={cssModul.info}>
            <div className={cssModul.title}>Kirik</div>
            <div className={cssModul.details}>Kirik Ireng</div>
        </div>
            <div className={cssModul.duration}>1:40:1</div>
        </div>
        <div className={cssModul.cardMovie}>
            <img src={Gambar1} alt="Image"/>
            <div className={cssModul.info}>
            <div className={cssModul.title}>Kirik</div>
            <div className={cssModul.details}>Kirik Ireng</div>
        </div>
            <div className={cssModul.duration}>1:40:1</div>
        </div>
        <div className={cssModul.cardMovie}>
            <img src={Gambar1} alt="Image"/>
            <div className={cssModul.info}>
            <div className={cssModul.title}>Kirik</div>
            <div className={cssModul.details}>Kirik Ireng</div>
        </div>
            <div className={cssModul.duration}>1:40:1</div>
        </div>
    </div>
    </div>
    </div>
 </div>
);

}
export default Play