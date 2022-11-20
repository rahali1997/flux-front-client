
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login/Login'
import Damage from './pages/Damage/Damage'
import Client from './pages/Client/Client'
import ProtectedRoute from './components/ProtectedRoute'
import SideBar from './components/Sidebar'
import AddClient from './pages/Client/AddClient'
import AddDamage from './pages/Damage/AddDamage'
import { useSelector } from "react-redux";
import "./App.css"

const App = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Router>  
      <Navbar />
      <div className='home_container'>
      {user && <SideBar/>}
      <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/client" element={<ProtectedRoute><Client /></ProtectedRoute>} />
          <Route exact path="/client/add" element={<ProtectedRoute><AddClient /></ProtectedRoute>} />
          <Route exact path="/damage" element={<ProtectedRoute><Damage /></ProtectedRoute>} />
          <Route exact path="/damage/add" element={<ProtectedRoute><AddDamage /></ProtectedRoute>} />
        </Routes>
      </div>
     
    </Router>
  )
}

export default App