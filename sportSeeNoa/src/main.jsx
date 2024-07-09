import React from 'react'
import ReactDOM from 'react-dom/client'
import User from './pages/user'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Activity from './components/Activity/Activity';
import Nutrients from './components/Nutrients/Nutrients';
import AverageSession from './components/AverageSession/AverageSession';
import Performance from './components/Performance/Performance';


/**
 *  poour repondre aux userstory 6 et 10 qui veulent que sur le chemin : path="/user/:id/activity"  apparait activity et nutrient
 * Composant UserActivityComponents qui affiche les composants Activity et Nutrients.
 * @returns {JSX.Element} Les composants Activity et Nutrients.
 */
const UserActivityComponents = () => {
 
  return (
      <>
          <Activity />
          <Nutrients />
      </>
  );
};

/**
 * Point d'entrée principal de l'application.
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <User /> */}
     <Router>
      <Routes>
            <Route path="/user/:id" element={<User />} />
            <Route path="/user/:id/activity" element={<UserActivityComponents /> } />
            <Route path="/user/:id/average-sessions" element={<AverageSession />} />
            <Route path="/user/:id/performance" element={<Performance />} />
            
      </Routes>
    </Router>
  </React.StrictMode>,
)


