import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addDamageSlice } from '../../features/damageSlice';
import { useNavigate } from 'react-router-dom';
import "./Damage.css"

const AddDamage = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    description: "",
    percentage: 0
  });

  const onChange = (e) => {  
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const saveDamage=async(e)=>{
     e.preventDefault()
    await  dispatch(addDamageSlice(formData)).then(()=>navigate('/damage')).catch(err=>console.log(err.message))
  }

  return (
    <div className='damage_container'>
      <form>
        <TextField
          className="input_field_domage"
          name="description"
          onChange={(e) => onChange(e)}
          value={formData.description}
          id="outlined-basic"
          label="Description Lésion"
          variant="outlined"
          multiline
          required
        />
        <TextField
          className="input_field_domage"
          name="percentage"
          type="number"
          InputProps={{
            inputProps: { min: 0 }
          }}
          onChange={(e) => onChange(e)}
          value={formData.percentage}
          id="outlined-basic"
          label="Pourcentage(%)"
          variant="outlined"
          required
        />
         <Button onClick={(e)=>saveDamage(e)} className='damage_btn' style={{ backgroundColor: "#232D4B" ,color:"#FFF",width:350,height:50,border:"none",marginLeft:50}} variant="contained">Ajouter lésion</Button>
      </form>
    </div>
  )
}

export default AddDamage