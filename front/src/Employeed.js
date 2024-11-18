import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Manager() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3011/employee')
      .then((response) => {
        setData(response.data); // Ensure you are accessing the correct property
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div>
     <center><h1> OSMO EMPLOYEES</h1></center>
      <table border={'1px'} style={{ borderSpacing: '10px', width: '100%',borderRadius:'10px' }} >
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
            <th>Salary</th>
          </tr>
        </thead>
        
        <tbody>
          {data.map((d) => (
            <tr key={d.ID}>
              <td>{d.no}</td>
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.mobile}</td>
              <td>{d.designation}</td>
              <td>{d.reported}</td>
              <td>{d.joiningdate}</td>
              <td>{d.role}</td>
              <td>{d.salary}</td>
              {/* Uncomment the buttons when needed */}
              {/* <td>
                <button><Link to={`/update/${d.ID}`}>EDIT</Link></button>
                <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => handleDelete(d.ID)}>DELETE</button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Manager;
