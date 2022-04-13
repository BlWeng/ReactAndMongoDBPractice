import React, { Component } from "react";
import axios from 'axios';

export default class StudentList extends Component {

    constructor(props) {
        super(props);
        this.state ={
            tr_f: ``
        }
    }

    componentDidMount() {

        var tr = `<tr><th>Name</th><th>Email</th><th>Rollno/th></tr>`;

        axios.get('http://localhost:4000/students/')
        .then(response => { 
            console.log(response.data)
            response.data.forEach(student => {

                tr += `<tr class="item">
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.rollno}</td>
            `;
            })

            this.setState({tr_f: tr});
        
        })
        ;  
    }


  render() {
    return (
      <div>
        <p>React Student List Component!</p>
        <table></table>
      </div>
    );
  }
}