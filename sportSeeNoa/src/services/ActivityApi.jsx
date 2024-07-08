import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ActivityModel from '../models/ActivityModel';



function UseActivityApi() {

    console.log("hey je suis en prod!")

    const { id } = useParams();
    const [activityData, setActivityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}/activity`);
                const data = await response.json();

                if (!response.ok) {
                    throw new Error('Erreur lors du chargement des données');
                }

                // Utiliser AverageSessionModel pour la modélisation des données
                const model = new ActivityModel(data.data);
                setActivityData(model.sessions);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    return { activityData, loading, error };
}

export default UseActivityApi;



     
