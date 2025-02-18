import React, {useState,useEffect} from "react";
import ReactPlayer from "react-player";
import cssModul from "./Play.module.css"
import { Link, useParams } from "react-router-dom";
import PlayCom from "../component/playCom/PlayCom";
import {isAuthenticated} from "../utils/auth";


function Play ({openModal}) {
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

    if(!isAuthenticated()){
        return openModal();
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

                <div className={cssModul.LinePlayBG}>
                    <div className={cssModul.LinePlayKiri}>
                        <h3 className={cssModul.Desk}>{movie.judul_movie}</h3>
                        <p className={cssModul.Desk}>{movie.tanggal_rilis}</p>
                    </div>
                    <div className={cssModul.LinePlayKanan}>
                        <div className={cssModul.lineLinkBtn}>
                            <Link className={cssModul.lineLink2} to={`/genre/${movie.jenis_idih}`}>
                                <h1 className={cssModul.Desk}>{movie.jenis}</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
    <PlayCom />
 </div>
);

}
export default Play