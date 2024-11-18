import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Link } from 'react-router-dom';

function Manager() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3011/managerd')
      .then((response) => {
        setData(response.data); 
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <div>
     <center><h1>OSMO MANAGERS</h1></center>
      <table border={'1px'} style={{ borderSpacing: '10px', width: '100%',borderRadius:'10px' }}>
        <thead>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Experience</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.ID}>
             
              <td>{d.name}</td>
              <td>{d.email}</td>
              <td>{d.mobile}</td>
              <td>{d.experience}</td>
              <td>{d.department}</td>
              <td>{d.joiningdate}</td>
              <td>{d.role}</td>
              <td>
                <button style={{borderRadius:'40px',color:'black'}}><Link to={`/update/${d.ID}`}><EditOutlinedIcon/></Link></button>&ensp;&ensp;
                <button style={{ backgroundColor: 'red', color: 'white',borderRadius:'40px' }} ><DeleteOutlinedIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Manager;

