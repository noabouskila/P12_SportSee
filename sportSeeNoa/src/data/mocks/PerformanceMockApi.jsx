import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import mockData from '../mockData.json';
import PerformanceModel from '../../models/PerformanceModel';

function UsePerformanceMockApi() {
    const { id } = useParams();
    const [performanceData, setPerformanceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        function fetchData() {
            try {
                // Trouver les données de performance de l'utilisateur correspondant
                const userPerformance = mockData.USER_PERFORMANCE.find(performance => performance.userId === parseInt(id));

                if (!userPerformance) {
                    throw new Error('Données de performance non trouvées pour cet utilisateur');
                }

                // Créer une instance de PerformanceModel avec les données trouvées
                const model = new PerformanceModel(userPerformance);
                setPerformanceData(model.sessions);
            } catch (error) {
                setError(error.message);
                console.error("Erreur lors de la récupération des données mockées : ", error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);

    return { performanceData, loading, error };
}

export default UsePerformanceMockApi;
