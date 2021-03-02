import './App.css';
import { React, useState } from "react";
import Form from "./Components/Form"; 

const initialFormVals = { name: "", email: "", role: "" }; 

function App() {

  const [ teamMembers, setTeamMembers ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormVals);

  const updateForms = (inputName, inputValue) => {
    setFormValues({ ...formValues, [ inputName ]: inputValue })
  };

  const submitForms = () => {
    const paramTeamMem = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    };

    if ( !paramTeamMem.name || !paramTeamMem.email || !paramTeamMem.role )
      return;

    setTeamMembers([ ...teamMembers, paramTeamMem ]);
    setFormValues([ initialFormVals ]);
  }
// comparing code to GP, do i need to make another js file to complete return statement correctly? create TeamMember.js to export 
  return (

    <div> 
      <Form 
          values = { formValues }
          update = { updateForms }
          submit = { submitForms } 
      />
        <h1> { teamMembers.name } </h1> 
        <p> { teamMembers.email } </p>
        <p> { teamMembers.role } </p>
        <div className = "addTeamMembers">
            {
              teamMembers.map((teamMember) => {
                  return <div className = "TM-container">
                    <h1> { teamMember.name } </h1>
                    <p> { teamMember.email } </p>
                    <p> { teamMember.role } </p>
                        </div>
              })
            }
        </div>
    </div>

  );
}

export default App;
