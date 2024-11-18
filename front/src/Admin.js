import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Link } from 'react-router-dom';

function Admin() {
   const [data, setData] = useState([]);

   useEffect(() => {
      axios.get('http://localhost:3011/admin')
         .then((response) => {
            setData(response.data);
         })
         .catch((error) => console.log("Error fetching data:", error));
   }, []);

   return (
      <div>
         <center>
            <div>
               <img
                  src='front/public/th.jpg'
                  alt='OSMO log'
                  style={{ width: '200px', height: 'auto' }}
               />
               <h1 style={{
                  fontSize: '50px',
                  backgroundImage: 'linear-gradient(to right, #ff69b4, #33ccff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
               }}>
                  OSMO
               </h1>
            </div>
         </center>
         <br /><br /><br />
         <div style={{ justifyContent: 'center', fontSize: '25px', marginLeft: '550px' }}>
            {data.map((item, index) => (
               <div key={index}>
                  <div>Name: {item.name}</div>
                  <br />
                  <div>Email: {item.email}</div>
                  <br />
                  <div>Password: {item.password}</div>
                  <br />
                  <center>
                     <div>
                        <button style={{ borderRadius: '30px', marginRight: '250px' }}>
                           <Link to={`adminup/${item.ID}`}><EditOutlinedIcon /></Link>
                        </button>
                     </div>
                  </center>
                  <br />
               </div>
            ))}
         </div>
      </div>
   );
}

export default Admin;
