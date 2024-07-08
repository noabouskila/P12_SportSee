import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../mockData.json';
import AverageSessionModel from '../../models/AverageSessionModel'; 

function UseAverageSessionMockApi() {
    const { id } = useParams();
    const [averageSessionData, setAverageSessionData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                // Trouver les sessions moyennes de l'utilisateur correspondant
                const userSessions = mockData.USER_AVERAGE_SESSIONS.find(session => session.userId === parseInt(id));
               
               
                if (!userSessions) {
                    throw new Error('Sessions moyennes non trouvées pour cet utilisateur');
                }

                // Utiliser AverageSessionModel pour la modélisation des données
                const model = new AverageSessionModel(userSessions);
                setAverageSessionData(model.sessions);

            } catch (error) {
                setError(error.message);
                console.error("Erreur lors de la récupération des données mockées : ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    return { averageSessionData, loading, error };
}

export default UseAverageSessionMockApi;
