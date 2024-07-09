import React from 'react';
import PropTypes from 'prop-types';
import UsePerformanceApi from '../../services/PerformanceApi';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';
import Styles from './Performance.module.scss'
import UseModeProdDevApi from '../../ModeProdDev/ModeProdDevApi';



/**
 * Composant Performance qui affiche les performances sous forme de graphique radar.
 * Utilise l'API pour récupérer les données des performances.
 * @returns {JSX.Element} Le composant Performance.
 */


function Performance() {

    // gerer switch mode dev et prod
    const UsePerformanceApi = UseModeProdDevApi('performance');

    const { performanceData, loading, error } = UsePerformanceApi();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log('performanceData :')
    console.log(performanceData)
    console.log('performanceData -----')

    // Définir les couleurs pour chaque type de performance
    const colors = {
        Intensité: "#00C49F",
        Vitesse: "#FFBB28",
        Force: "#FF8042",
        Endurance: "#0088FE",
        Energie: "#FF8042",
        Cardio: "#FFBB28",
    };

    //  réorganiser les données pour que "Intensité" soit en haut
    const orderedKinds = ["Intensité", "Cardio", "Energie", "Endurance", "Force", "Vitesse"];

    const performanceDataWithColors = performanceData
        .map((session) => ({
            ...session,
            color: colors[session.kind],
        }))
        .sort((a, b) => orderedKinds.indexOf(a.kind) - orderedKinds.indexOf(b.kind));

    return (
        <div className={Styles.Performance} >

            <div style={{ backgroundColor: '#2d2d2d', padding: '20px', borderRadius: '10px' }}>
                {performanceDataWithColors && performanceDataWithColors.length > 0 ? (
                    <ResponsiveContainer width="100%" height={300}>
                        <RadarChart data={performanceDataWithColors} outerRadius="80%">
                            <PolarGrid />
                            <PolarAngleAxis 
                                dataKey="kind" 
                                stroke="#ffffff"
                                tick={{ fill: '#ffffff', fontSize: 14 }} 
                            />
                            {/* <PolarRadiusAxis 
                                stroke="#ffffff"
                                tick={{ fill: '#ffffff' }} 
                            /> */}
                            <Radar
                                name="Performance"
                                dataKey="value"
                                stroke="#ff0101"
                                fill="#ff0101"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                ) : (
                    <div style={{ color: '#ffffff' }}>No data available</div>
                )}
            </div>

        </div>
       
    );
}





export default Performance;
