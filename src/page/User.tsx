import { useEffect, useState } from "react"
import cssModule from "./User.module.css"
import { Link } from "react-router-dom";

function User () {
    const userId = localStorage.getItem("userId");
    const token = localStorage.getItem("token");
    const [users,setUser] = useState([]);
    useEffect(() => {
        const fetchUser = async () => {
            try{
                const response = await fetch(`http://localhost:8000/api/user/${userId}`,{
                    method: 'GET',
                    headers:{
                            'Authorization': `Bearer ${token}`
                    },
                });
                const data = await response.json();
                console.log(data);
                if(Array.isArray(data)){
                    setUser(data);
                }else{
                    console.error("Expected an array but got:", data);
                }
            }catch (error) {
                console.error("Error fetching movies:", error);
            }
        };
        fetchUser();
    },[]);
return(
    <div className={cssModule.bGUser}>
        <div className={cssModule.h1User}>
            <h1>User Info</h1>
        </div>
            {users.map((user, index) => (
        <div key={index} className={cssModule.ContainerUser}>
            <div className={cssModule.CarduserKiri}>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.telp}</p>
                <Link className={cssModule.linkUser} to='/user/update/'>Ubah Data</Link>
            </div>
            <div className={cssModule.CarduserKanan}>
                <p>{user.plan_id}</p>
                <p>{user.nama_sub}</p>
                <p>{user.date_sub}</p>
                <p>{user.valid_date}</p>
                <Link className={cssModule.linkUser} to='/subcribe'>Ubah Langganan </Link>
            </div>
        </div>
            ))}
    </div>
)
}

export default User