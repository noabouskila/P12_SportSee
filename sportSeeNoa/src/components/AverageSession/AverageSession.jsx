import React, { useState } from 'react';
import UseAverageSessionApi from '../../services/AverageSessionApi';
import UseModeProdDevApi from '../../ModeProdDev/ModeProdDevApi';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import  Styles from './AverageSession.module.scss'


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
                <p style={{ color: '#000' }}>{`${payload[0].payload.day}: ${payload[0].value} min`}</p>
            </div>
        );
    }

    return null;
}


function AverageSession() {

    // gerer  switch mode dev et prod
    const UseAverageSessionApi = UseModeProdDevApi('averageSession');

    const { averageSessionData, loading, error } = UseAverageSessionApi();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {averageSessionData && averageSessionData.length > 0 ? (
                <div className={Styles.AverageSession} >
                    <p>Durée moyenne des sessions</p>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={averageSessionData}>
                            <XAxis dataKey="day" />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}

export default AverageSession;
