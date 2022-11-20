import React,{useEffect, useState} from 'react'
import Table from "../../components/Table"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import  {getAllDamageSlice,deleteDamageSlice} from "../../features/damageSlice"
import modal from "../../utils/modal"
 import "./Damage.css"

const Damage = () => {
  const dispatch=useDispatch()
  const [damages,setDamges]=useState([])
  const { data } = useSelector((state) => state.damage);
  useEffect(()=>{
     dispatch(getAllDamageSlice())
    
  },[])

  useEffect(()=>{
    const editable = data.map(o => ({ ...o }));
    setDamges(editable)
  },[data])
     const navigate=useNavigate()
     const columns = [
        {
          title:"Lésion",
          field: "description",
        },
        {
          title:"pourcentage (%)",
          field: "percentage",
        },
      ];
      const remove= async (id)=>{
        let result=await modal("êtes-vous sûr de vouloir supprimer cet élément ? ")
        if(result.isConfirmed) {
          dispatch(deleteDamageSlice(id)).then(()=>dispatch(getAllDamageSlice()))
        }
      }
  return (
    <div>
       <Table columns={columns} title={"liste des Lésions"} deleteElement={remove} data={damages}/>
       <Button onClick={()=>navigate("/damage/add")} style={{ backgroundColor: "#232D4B" ,color:"#FFF",width:150,height:50,border:"none"}} variant="contained">Ajouter Lésion</Button>
    </div>
  )
}

export default Damage