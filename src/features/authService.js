import axios from 'axios'
import BaseUrl from '../baseUrl'


const API_URL= `${BaseUrl}/api/admin/login`



// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user',JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logout = () => {
  localStorage.removeItem("user")
}

const authService = {
  login,
  logout
}

export default authService