import React, { useState } from 'react';
import UseAverageSessionApi from '../../services/AverageSessionApi';
import UseModeProdDevApi from '../../ModeProdDev/ModeProdDevApi';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import  Styles from './AverageSession.module.scss'
import PropTypes from 'prop-types';



/**
 * Tooltip personnalisé pour afficher les informations de chaque point de la courbe.
 * @param {Object} props - Les propriétés du tooltip personnalisé.
 * @param {boolean} props.active - Indique si le tooltip est actif.
 * @param {Array} props.payload - Les données du point survolé.
 * @returns {JSX.Element|null} Le tooltip personnalisé ou null si non actif.
 */

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
CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(PropTypes.object),
};





/**
 * Composant AverageSession qui affiche la durée moyenne des sessions sous forme de graphique en ligne.
 * @returns {JSX.Element} Le composant AverageSession.
 */


function AverageSession() {

    // gerer  switch mode dev et prod
    const UseAverageSessionApi = UseModeProdDevApi('averageSession');

     // export de donnees
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
