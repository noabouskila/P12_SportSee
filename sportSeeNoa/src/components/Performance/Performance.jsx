import React from 'react';
import usePerformanceApi from '../../services/PerformanceApi';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';

function Performance(props) {
    const { performanceData, loading, error } = usePerformanceApi();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    console.log('performanceData :')
    console.log(performanceData)
    console.log('performanceData -----')

    return (
        <div>
            {performanceData && performanceData.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                    <RadarChart data={performanceData}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="kind" />
                        <PolarRadiusAxis />
                        <Radar name="Performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}

export default Performance;
