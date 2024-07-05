import { useState, useEffect } from "react";
function Barat () {
    const [movie, setMovies] = useState(0);
    useEffect(() => {
        const fetchMovies = async () =>{
            try{
                const response = await fetch('');
                const data =  await response.json();
                console.log("Fetched data:", data);
                if (Array.isArray(data)){
                    setMovies(data);
                }else{
                    console.error("Expected an array but got:", data);
                }
            } catch (error){
                console.error("Error fetching movies:", error);
            }
        };
        fetchMovies();
    }, []);
return(
    <div>
        
    </div>    
);
}

export default Barat