import { useEffect, useState } from 'react';
import cssModule from './Subcribe.module.css'
function Subcribe () {
    const [subS, setSubs] = useState([]);
    useEffect(()=>{
        const fetchSubs = async () => {
            try{
                const response = await fetch('http://localhost:8000/api/sub');
                const data = await response.json();
                if(data){
                    setSubs(data)
                }else{
                    console.error("Expected an array but got:", data);
                }
            }catch(error){
                console.error("Error fetching movies:", error);
            }
        };
        fetchSubs();
    }, []);

return(
    <div className={cssModule.BgSub}>
            <div className={cssModule.judulSub}>
                <h1>Opsi Pilihan Berlangganan</h1>
            </div>
        <div className={cssModule.ContainerSub}>
            {subS.map((sub,index) => (
                <div key={index} className={cssModule.cardSub}>
                    <div className={cssModule.cardSubDalam}>
                        <h1>{sub.nama_sub}</h1>
                        {/* <p>Pengguna Gratisan</p> */}
                        {sub.sub_id == 0 ? (
                        <div className={cssModule.cardInfo}>
                            <p>Pengguna Gratisan</p>
                        </div>
                        ):(
                        <div className={cssModule.cardInfo}>
                            <button className={cssModule.btn}>Langganan</button>
                        </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
}

export default Subcribe