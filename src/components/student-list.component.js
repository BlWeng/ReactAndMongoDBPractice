
import axios from 'axios';

import React, { useEffect, useState } from "react";

function StudentList() {
// set state
  const [customers, setCustomers] = useState([]);

// first data grab
  useEffect(() => {

    axios.get('http://localhost:4000/students/')
      .then(response => { 
          console.log(response.data);
          
          setCustomers(response.data);
      
      })
      ; 
      
  }, []);

return (

    <div>
      {/* pass data down to the Customers component where we'll create the table*/}
      <Customers customers={customers} />
    </div>
  );
}

function Customers({customers}) {

    console.log(customers)

    return (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Rollno</th>
              </tr>
            </thead>
            <tbody>
              {/* iterate through the customers array and render a unique Customer component for each customer object in the array */}
              { customers.map(customer => <Customer key={customer._id} customer={customer} />) }
              { /*customers.forEach(customer => <Customer key={customer._id} customer={customer} />)*/}
            </tbody>
          </table>
    )
  }


// deconstructed props
function Customer({customer:{id, name, email, rollno} }) {

  return (
        <tr key={id}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
        </tr>
  )
}

export default StudentList

