// import React from 'react';
// import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


// function Scores({userData , loading , error}) {
    
//     return (
//         <div>
//              <div>
//                 <h2>Score</h2>
//              <p>{userData.data.todayScore*100} %</p>
//              </div>
//         </div>
//     );
// }

// export default Scores;

import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

function Scores({ userData, loading, error }) {
    // Création de données pour le RadialBarChart
    const score = userData.data.todayScore * 100;
    const scoreData = [
        {
            name: 'Score',
            value: score,
            fill: '#ff0000',
        },
    ];

    return (
        <div style={{ width: '20%', height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9', borderRadius: '10px' }}>
            <h2 style={{ margin: 0 }}>Score</h2>
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
