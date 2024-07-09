import { useState } from 'react'
import PropTypes from 'prop-types';
import Styles from'./User.module.scss'

import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Nutrients from '../components/Nutrients/Nutrients'
import Scores from '../components/Scores/Scores'
import Activity from '../components/Activity/Activity'
import AverageSession from '../components/AverageSession/AverageSession'
import Performance from '../components/Performance/Performance'

import UserApi from '../services/UserApi'



/**
 * Composant User qui affiche les informations de l'utilisateur.
 * @returns {JSX.Element} Le composant User.
 */



function User() {

  const {userData , error , loading} = UserApi()

  // console.log(import.meta.env.VITE_IS_PROD) 

  return (
    <>
    <div className={Styles.AppContainer} >
      <Header/>
      <Banner/>

      {error ? (
        <div>
          <h1>Oups!</h1>
          <p>Une erreur s'est produite lors de la récupération des données. Veuillez vérifier l'URL ou réessayer ultérieurement.</p>
        </div>
        
        ) : userData ? (
          <div className={Styles.User} >

            {/* Données generales */}
            <h1 className={Styles.UserH1} >Bonjour <span>{userData.userInfos.firstName}</span></h1>
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>


            {/* activity */}
            <div className={Styles.UserGraphics} >
              <Activity/>

              <div  className={Styles.UserAveragePerformanceScores} >
              <AverageSession/>
              <Performance/>
              <Scores userData={userData} error={error} loading={loading}/>

              </div>
            
              <Nutrients userData={userData} error={error} loading={loading} />
            </div>

          



          </div>
        ) : (
          <p>Chargement des données...</p>
      )}


    </div>
    
    </>
  )
}

export default User

