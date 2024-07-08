import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseActivityApi from '../../services/ActivityApi';
import UseModeProdDevApi from '../../ModeProdDev/ModeProdDevApi';
import Styles from './Activity.module.scss'

function Activity() {

    // gerer  switch mode dev et prod
    const UseActivityApi= UseModeProdDevApi('activity');

    const { activityData, loading, error } = UseActivityApi();
    

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {activityData && activityData.length > 0 ? (
                <div className={Styles.Activity} >
                    <p className={Styles.ActivityP} >Activité quotidienne</p>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart
                            data={activityData}
                            margin={{
                                top: 20, right: 30, left: 20, bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="kilogram" fill="#8884d8" name="Poids (kg)" />
                            <Bar dataKey="calories" fill="#82ca9d" name="Calories brûlées (kCal)" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}

export default Activity;
