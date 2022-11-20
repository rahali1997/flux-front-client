import Table from "../../components/Table"
import React,{useEffect, useState} from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getAllClientSlice} from "../../features/ClientSlice"
import {deleteClientSlice} from "../../features/ClientSlice"
import modal from "../../utils/modal"
import "./Client.css"


const Client = () => {
  const dispatch=useDispatch()
  const [clients,setClients]=useState([])
 const { data } = useSelector((state) => state.client);
  useEffect(()=>{
     dispatch(getAllClientSlice())

  },[])

  useEffect(()=>{
    const editable = data.map(o => ({ ...o }));
    setClients(editable)
  },[data])
    const navigate=useNavigate()
 
      const columns = [
        {
          title:"Nom",
          field: "firstname",
        },
        {
          title:"Prenom",
          field: "lastname",
        },
        {
          title:"Age",
          field: "age",
        },
        {
          title:"Occupation",
          field: "job",
        },
        {
          title:"Numéro de Telephone",
          field: "phoneNumber",
        },
        {
          title:"Numéro de Cin",
          field: "cin",
        },
        {
          title:"pourcentage(%)",
          field: "percentage",
        },
      ];
    
    const remove=async(id)=>{
      let result=await modal("êtes-vous sûr de vouloir supprimer ce client ? ")
      if(result.isConfirmed) {
        dispatch(deleteClientSlice(id)).then(()=>dispatch(getAllClientSlice()))
      }
    }
  return (
    <div>
      <Table columns={columns} title={"liste des clients"} deleteElement={remove} data={clients}/>
      <Button onClick={()=>navigate("/client/add")} style={{ backgroundColor: "#232D4B" ,color:"#FFF",width:150,height:50,border:"none"}} variant="contained">Ajouter Client</Button>
    </div>
  )
}

export default Client