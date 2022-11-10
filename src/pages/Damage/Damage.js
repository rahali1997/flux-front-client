import React from 'react'
import Table from "../../components/Table"
import "./Damage.css"

const Damage = () => {
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
      const remove=(id)=>{
       
      }
  return (
    <div>
       <Table columns={columns} title={"liste des Lésions"} deleteElement={remove} data={[]}/>
    </div>
  )
}

export default Damage