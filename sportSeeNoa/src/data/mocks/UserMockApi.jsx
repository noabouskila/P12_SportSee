import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import mockData from '../mockData.json'

function UseUserMockApi() {


    const {id} = useParams();
    const [userData , setUserData ] = useState()
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
   

    useEffect(()=>{

        function fetchData() {
            try {
                // Trouver l'utilisateur correspondant dans les données mockées
                const user = mockData.USER_MAIN_DATA.find(user => user.id === parseInt(id));

                // console.log("user")
                // console.log(user)
                // console.log("user")
                if (!user) {
                    throw new Error('Utilisateur non trouvé');
                }

                setUserData(user);

            } catch (error) {
                setError(error.message);
                console.error("Erreur lors de la récupération des données mockées : ", error);
            }finally {
                setLoading(false);
            }
            
        }

        fetchData()
    },[id])
    

    return {userData ,loading, error  }
}

export default UseUserMockApi;