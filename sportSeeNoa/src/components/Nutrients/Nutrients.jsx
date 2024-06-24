import React from 'react';
import glucides from "../../assets/glucides.svg"
import lipides from "../../assets/lipides.svg"
import proteines from "../../assets/proteines.svg"
import calories from "../../assets/calories.svg"

import Styles from './Nutrients.module.scss'

function Nutrients({userData , loading , error}) {
    return (
        <div className={Styles.Nutrients} >
            <div className={Styles.NutrientsContainer} >
                <div>
                    <img src={calories} alt="logo calories" />
                </div>
                <div>
                    <p> {userData.data.keyData.calorieCount.toLocaleString('en-US')} kCal </p>
                    <span>Calories</span>
                </div>
            </div>

            <div className={Styles.NutrientsContainer}>
                <div>
                    <img src={proteines} alt="log proteines" />
                </div>
                <div>
                    <p>{userData.data.keyData.proteinCount} g</p>
                    <span>Protéines</span>
                </div>
            </div>

            <div className={Styles.NutrientsContainer}>
                <div>
                    <img src={glucides} alt="logo glucides" />
                </div>
                <div>
                    <p>{userData.data.keyData.carbohydrateCount} g</p>
                    <span>Glucides</span>
                </div>
            </div>


            <div className={Styles.NutrientsContainer}>
                <div>
                    <img src={lipides} alt="logo lipides" />
                </div>
                
                <div>
                    <p>{userData.data.keyData.lipidCount}g</p>
                    <span>Lipides</span>
                </div>
            </div>
      </div>
    );
}

export default Nutrients;


// const USER_MAIN_DATA = [
//     {
//         id: 12,
//         userInfos: {
//             firstName: 'Karl',
//             lastName: 'Dovineau',
//             age: 31,
//         },
//         todayScore: 0.12,
//         keyData: {
//             calorieCount: 1930,
//             proteinCount: 155,
//             carbohydrateCount: 290,
//             lipidCount: 50
//         }
//     },