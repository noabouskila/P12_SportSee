import React from 'react'
import ReactDOM from 'react-dom/client'
import User from './pages/user'
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     {/* <User /> */}
     <Router>
      <Routes>
            <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)

