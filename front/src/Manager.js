import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';

function Manager() {
  const [data, setData] = useState([]);
  const managerName = localStorage.getItem('managerName');
  const department = localStorage.getItem('department');
  const salary = localStorage.getItem('salary') || 'N/A'; // Default to 'N/A' if undefined

  useEffect(() => {
    if (managerName && department) {
      axios.get(`http://localhost:3011/employees/${managerName}/${department}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => console.log("Error fetching data:", error));
    }
  }, [managerName, department]);

  return (
    <div>
      <div><p>
        <strong>ManagerName: {managerName}</strong>
        <br/>
        <br/>
        <strong>Department :{department}</strong>
        <br/>
        <br/>
        <strong>Manager Salary: </strong>{salary}</p></div>
        
      
      <center><h1>EMPLOYEE DETAILS</h1></center>
      <table border={'1px'} style={{ borderSpacing: '10px', width: '100%', borderRadius: '10px' }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Reported</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.no}>
              <td>{d.no}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.mobile}</td>
              <td>{d.designation}</td>
              <td>{d.reported}</td>
              <td>{d.joiningdate}</td>
              <td>{d.role}</td>
              <td>
                <button style={{ borderRadius: '40px', color: 'black' }}>
                  <Link to={`/update/${d.no}`}>
                    <EditOutlinedIcon />
                  </Link>
                </button>&ensp;&ensp;
                <button style={{ backgroundColor: 'red', color: 'white', borderRadius: '40px' }}>
                  <DeleteOutlinedIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Manager;
