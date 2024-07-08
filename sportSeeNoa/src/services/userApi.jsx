import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function UseUserApi() {


    const {id} = useParams();
    const [userData , setUserData ] = useState()
    const [loading, setLoading] = useState(true);
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

                setUserData(data.data)

            }catch(error){
                setError(error.message);
                console.error("Erreur lors de la récupération des données : ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    },[id])
    

    return {userData ,loading, error }
}

export default UseUserApi;