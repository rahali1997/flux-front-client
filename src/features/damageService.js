import axios from 'axios'
import BaseUrl from '../baseUrl'


const API_URL= `${BaseUrl}/api/damage`




//  add Damage
const addDamageService = async (userData) => {
  const response = await axios.post(API_URL, userData)

  return response.data
}

//  list Damage
const getAllDamageService = async () => {
    const response = await axios.get(API_URL)
  
    return response.data
  }

//  delete lésion
const deleteLesionService = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`)
  
    return response.data
  }



export {
    addDamageService,
    getAllDamageService,
    deleteLesionService
}