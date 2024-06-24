import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function UserApi() {


    const {id} = useParams();
    const [userData , setUserData ] = useState()
    const [error, setError] = useState(null);
   

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch(`http://localhost:3000/user/${id}/`)
                const data = await response.json()
                // console.log(data)

                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }

                setUserData(data)

            }catch(error){
                setError(error.message);
                console.error("Erreur lors de la récupération des données : ", error);
            }
        }
        fetchData()
    },[id])
    

    return {userData , error }
}

export default UserApi;