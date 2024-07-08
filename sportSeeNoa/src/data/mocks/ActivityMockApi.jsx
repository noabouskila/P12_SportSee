import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../mockData.json';
import ActivityModel from '../../models/ActivityModel'

function UseActivityMockApi() {
    const { id } = useParams();
    const [activityData, setActivityData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("hey je suis en dev!")
    useEffect(() => {
        function fetchData() {
            try {
                // Trouver les données d'activité de l'utilisateur correspondant
                const userActivity = mockData.USER_ACTIVITY.find(activity => activity.userId === parseInt(id));
        
                if (!userActivity) {
                    throw new Error('Données d\'activité non trouvées pour cet utilisateur');
                }
                // console.log(userActivity)

                // Utiliser ActivityModel pour la modélisation des données
                const model = new ActivityModel(userActivity);

                setActivityData(model.sessions);
            } catch (error) {
                setError(error.message);
                console.error("Erreur lors de la récupération des données mockées : ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    return { activityData, loading, error };
}

export default UseActivityMockApi;
