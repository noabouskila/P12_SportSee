import { useState } from 'react'
import styles from'./User.module.scss'

import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Nutrients from '../components/Nutrients/Nutrients'
import Scores from '../components/Scores/Scores'
import Activity from '../components/Activity/Activity'
import AverageSession from '../components/AverageSession/AverageSession'
import Performance from '../components/Performance/Performance'

import UserApi from '../services/userApi'


function User() {

  const {userData , error , loading} = UserApi()

  console.log(import.meta.env.VITE_IS_PROD)

  return (
    <>
    
    <Header/>
    <Banner/>

    {error ? (
      <div>
        <h1>Oups!</h1>
        <p>Une erreur s'est produite lors de la récupération des données. Veuillez vérifier l'URL ou réessayer ultérieurement.</p>
      </div>
      
      ) : userData ? (
        <div className={styles.User} >

          {/* Données generales */}
          <h1>Bonjour <span>{userData.data.userInfos.firstName}</span></h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>


          {/* activity */}
          <div>
            <Activity/>
            <AverageSession/>
            <Performance/>
            <Scores userData={userData} error={error} loading={loading}/>
            <Nutrients userData={userData} error={error} loading={loading} />
          </div>

         



        </div>
      ) : (
        <p>Chargement des données...</p>
    )}

    </>
  )
}

export default User

// CREE UN FICHIER MODEL QUI VA MODELISER LES DONNEE ET FAIRE LINTERMEDIAIRE ENTRE USERAPI ET USER 