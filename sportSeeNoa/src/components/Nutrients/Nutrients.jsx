import React from 'react';
import glucides from "../../assets/glucides.svg"
import lipides from "../../assets/lipides.svg"
import proteines from "../../assets/proteines.svg"
import calories from "../../assets/calories.svg"

import Styles from './Nutrients.module.scss'

import UseUserApi from '../../services/UserApi';
import UseModeProdDevApi from '../../ModeProdDev/ModeProdDevApi';

function Nutrients() {

    
    // gerer  switch mode dev et prod
    const UseUserApi = UseModeProdDevApi('user');

    // export de donnees
    const {userData , loading , error} = UseUserApi()


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

    return (
        <div className={Styles.Nutrients} >
            <div className={Styles.NutrientsContainer} >
                <div>
                    <img src={calories} alt="logo calories" />
                </div>
                <div>
                    <p> {userData.keyData.calorieCount.toLocaleString('en-US')} kCal </p>
                    <span>Calories</span>
                </div>
            </div>

            <div className={Styles.NutrientsContainer}>
                <div>
                    <img src={proteines} alt="log proteines" />
                </div>
                <div>
                    <p>{userData.keyData.proteinCount} g</p>
                    <span>Protéines</span>
                </div>
            </div>

            <div className={Styles.NutrientsContainer}>
                <div>
                    <img src={glucides} alt="logo glucides" />
                </div>
                <div>
                    <p>{userData.keyData.carbohydrateCount} g</p>
                    <span>Glucides</span>
                </div>
            </div>


            <div className={Styles.NutrientsContainer}>
                <div>
                    <img src={lipides} alt="logo lipides" />
                </div>
                
                <div>
                    <p>{userData.keyData.lipidCount}g</p>
                    <span>Lipides</span>
                </div>
            </div>
      </div>
    );
}

export default Nutrients;

