import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';
import Styles from './Scores.module.scss'
// import UseUserApi from '../../services/UserApi';
import UseModeProdDevApi from '../../ModeProdDev/ModeProdDevApi';


function Scores() {

    // gerer  switch mode dev et prod
    const UseUserApi = UseModeProdDevApi('user');
    // console.log(UseUserApi)
   
    // export de donnees
    const { userData, loading, error } =  UseUserApi()

   
    // console.log(userData) 

    // Afficher un message de chargement pendant que les données sont en cours de récupération
      if (loading) {
        return <div>Loading...</div>;
    }
    
    // Afficher un message d'erreur si une erreur s'est produite
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    // Afficher un message si userData est undefined
    if (!userData) {
        return <div>No data available</div>;
    }
    
    // Création de données pour le RadialBarChart
    // const score = userData.data.todayScore * 100 || userData.data.score * 100 ;
     const score = userData.todayScore * 100 || userData.score * 100 ;
    const scoreData = [
        {
            name: 'Score',
            value: score,
            fill: '#ff0000',
        },
    ];

    return (
        <div className={Styles.Score} style={{ width: '30%', height: 350, display: 'flex', flexDirection: 'column', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
            <p className={Styles.ScoreP} style={{ marginLeft: 40,  marginTop: 10 }}>Score</p>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart 
                    cx="50%" 
                    cy="50%" 
                    innerRadius="70%" 
                    outerRadius="80%" 
                    barSize={10} 
                    data={scoreData} 
                    startAngle={90} 
                    endAngle={450}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="value"
                    />
                    <text
                        x="50%" 
                        y="50%" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        className="progress-label"
                        style={{ fontSize: '24px', fill: '#000' }}
                    >
                        {`${score}%`}
                    </text>
                    <text
                        x="50%" 
                        y="60%" 
                        textAnchor="middle" 
                        dominantBaseline="middle" 
                        style={{ fontSize: '16px', fill: '#999' }}
                    >
                        de votre objectif
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Scores;
