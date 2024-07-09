import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import UseActivityApi from '../../services/ActivityApi';
import UseModeProdDevApi from '../../ModeProdDev/ModeProdDevApi';
import Styles from './Activity.module.scss'
import PropTypes from 'prop-types';


/**
 * Composant Activity qui affiche l'activité quotidienne de l'utilisateur sous forme de graphique à barres.
 * @returns {JSX.Element} Le composant Activity.
 */


function Activity() {

    // gerer  switch mode dev et prod
    const UseActivityApi= UseModeProdDevApi('activity');

    // recuperer les données  de rendu de l'api avec la destructuration
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
                            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                            <XAxis dataKey="name" />
                            <YAxis  orientation="right"  axisLine={false} />
                            <Tooltip />
                            <Legend 
                                layout="horizontal" 
                                align="right" 
                                verticalAlign="top" 
                                wrapperStyle={{ bottom:390,  right:30}}
                                iconType="circle" 
                            />
                            <Bar dataKey="kilogram" fill="#000000" name="Poids (kg)"   barSize={10}  radius={[10, 10, 0, 0]}/>
                            <Bar dataKey="calories" fill="#FF0000" name="Calories brûlées (kCal)"  barSize={10}  radius={[10, 10, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <div>No data available</div>
            )}
        </div>
    );
}

Activity.propTypes = {
    /**
     * Les données d'activité de l'utilisateur.
     */
    activityData: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        kilogram: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
      })
    ),
    // /**
    //  * Indique si les données sont en cours de chargement.
    //  */
    // loading: PropTypes.bool.isRequired,
    // /**
    //  * L'erreur survenue lors de la récupération des données.
    //  */
    error: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }),
  };

export default Activity;
