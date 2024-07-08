import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AverageSessionModel from '../models/AverageSessionModel';


function UseAverageSessionApi() {
    const { id } = useParams();
    const [averageSessionData, setAverageSessionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }

                // //vérifier les données récupérées
                // console.log('Data fetched from API:', data);

                // Utiliser AverageSessionModel pour la modélisation des données
                const model = new AverageSessionModel(data.data);
                setAverageSessionData(model.sessions);

            } catch (error) {
                setError(error)
                console.error("Erreur lors de la récupération des données : ", error);
            }
            finally{
                setLoading(false)
            }
        }
        fetchData();
    }, [id]);


    return { averageSessionData ,  loading , error}
}

export default UseAverageSessionApi;














