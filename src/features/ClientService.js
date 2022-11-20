import axios from 'axios'
import BaseUrl from '../baseUrl'


const API_URL= `${BaseUrl}/api/client`



//  getAllClients 
const getAllClientService  = async () => {
 
  const response = await axios.get(API_URL)
 
  return response.data
}


//  add Client 
const addClientService  = async (userData) => {
 
  const response = await axios.post(API_URL,userData)
 
  return response.data
}




//  deleteClient
const deleteClientService  = async (id) => {
  
  const response = await axios.delete(`${API_URL}/${id}`)
  return response.data
}



export  {
  getAllClientService,
  deleteClientService,
  addClientService
}