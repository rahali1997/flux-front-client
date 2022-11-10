import Table from "../../components/Table"
import "./Client.css"

const Client = () => {
 
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
    
    const remove=(id)=>{
       
    }
  return (
    <div>
      <Table columns={columns} title={"liste des clients"} deleteElement={remove} data={[]}/>
    </div>
  )
}

export default Client