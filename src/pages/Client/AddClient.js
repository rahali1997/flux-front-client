import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"
import {getAllDamageSlice} from "../../features/damageSlice"
import {addClientSlice} from "../../features/ClientSlice"
import Select from "react-select";
import "./Client.css"


const AddClient = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.damage);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    job: "",
    cin: "",
    phoneNumber: "",
    percentage: 0.07,
    defaultOptions: [
    ],
    options: [],

  });

  useEffect(()=>{
     const getOptions=async()=>{
      await dispatch(getAllDamageSlice())
      let mydefaultOptions =[]
      data.map(function(item){
        mydefaultOptions.push({value:item.percentage,label:item.description})
      })
      await  setFormData({...formData,defaultOptions:mydefaultOptions})
     }
     getOptions()
  },[])

  const onSubmit = async (e) => {
    e.preventDefault()
    let age = getAge(formData.age)
    var finaleResult = 0
    var items = 0
    formData.options.map(function (item) {
      items = items + item.value
      finaleResult = items
    })
    let calculatedResult = (finaleResult) / (formData.options.length)
    try {
     await dispatch(addClientSlice({
        firstname: formData.firstname,
        lastname: formData.lastname,
        age:age,
        cin:formData.cin,
        job: formData.job,
        phoneNumber:formData.phoneNumber,
        percentage:calculatedResult.toFixed(2)
      }))
    await  navigate("/client")
    }
    catch (err) {
      console.log(err.message)
    }
  };
  const onChange = (e) => {

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  const handleOptions = e => {
    setFormData({ ...formData, options: e });
  };

  function getAge(age) {
    let arr = age.split('/')
    let m = arr[0]
    let d = arr[1]
    arr[0] = d
    arr[1] = m
    let myage = arr.join('/')
    var dob = new Date(myage);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    console.log(age)
    return age
  }

  return (
    <div className="client_container">
      <form onSubmit={onSubmit}>
        <TextField
          className="input_field"
          name="firstname"
          onChange={(e) => onChange(e)}
          value={formData.firstname}
          id="outlined-basic"
          label="Nom"
          variant="outlined"
          multiline
          required
        />

        <TextField
          className="input_field"
          name="lastname"
          onChange={(e) => onChange(e)}
          value={formData.lastname}
          id="outlined-basic"
          label="Prenom"
          variant="outlined"
          multiline
          required
        />

        <TextField
          className="input_field"
          id="outlined-basic"
          name="age"
          type="date"
          onChange={(e) => onChange(e)}
          value={formData.age}
          variant="outlined"
          required
        />

        <TextField
          className="input_field"
          label="CIN"
          id="outlined-basic"
          name="cin"
          type="text"
          onChange={(e) => onChange(e)}
          value={formData.cin}
          inputProps={{ maxLength: 8 }}
          variant="outlined"
          required
        />

        <TextField
          className="input_field"
          name="phoneNumber"
          onChange={(e) => onChange(e)}
          value={formData.phoneNumber}
          inputProps={{ maxLength: 9 }}
          id="outlined-basic"
          label="Numero de telephone"
          variant="outlined"

        />
        <TextField
          className="input_field"
          name="job"
          onChange={(e) => onChange(e)}
          value={formData.job}
          id="outlined-basic"
          label="Occupation"
          variant="outlined"
          multiline
          required
        />
        <br/>
          <Select
            placeholder="liste des Lésion"
            name="programme"
            style={{ width: "350px" }}
            isMulti
            onChange={e => handleOptions(e)}
            options={formData.defaultOptions}
          />
          <br/>
        <Button
          type="submit"
          style={{
            width: 300,
            height: 50,
            backgroundColor: "#232D4B",
            marginLeft: 120
          }}
          variant="contained"
        >
          Calculer
        </Button>
      </form>
    </div>
  );
};

export default AddClient;
