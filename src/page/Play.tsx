import React, {useState,useEffect} from "react";
import ReactPlayer from "react-player";
import cssModul from "./Play.module.css"
import { useParams } from "react-router-dom";
import Gambar1 from  "../assets/gambar1.png";
import PlayCom from "../component/playCom/PlayCom";


function Play () {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/movies/show/${id}`);
                const result = await response.json();
                console.log("Fetched data:", result);
                if (response.ok) {
                    setMovie(result); // Set the fetched movie data
                } else {
                    console.error("Failed to fetch movie:", response.statusText);
                }
            } catch (error) {
                console.error("Error fetching movie:", error);
            }
        };
        fetchMovie();
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

return(
 <div className={cssModul.bgPlay}>
     <h1 className={cssModul.h1Judul}>{movie.judul_movie}</h1>
            <div className={cssModul.playVideo}>
                <div className={cssModul.Video}>
                    <ReactPlayer
                        className={cssModul.player}
                        url={movie.video_url}
                        width="1024"
                        height="720"
                        controls
                    />
                </div>

                <div className={cssModul.LinePlay}>
                    <div className={cssModul.LinePlayKiri}>
                        <h3 className={cssModul.Desk}>{movie.judul_movie}</h3>
                        <p className={cssModul.Desk}>{movie.tanggal_rilis}</p>
                    </div>
                    <div className={cssModul.LinePlayKanan}>
                        <h1>Kanan</h1>
                    </div>
                </div>
            </div>
    <PlayCom />
 </div>
);

}
export default Play