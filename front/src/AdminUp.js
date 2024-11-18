import React, { useEffect, useState } from 'react';
import './adminup.css';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function AdminUp() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      axios.get(`http://localhost:3011/admin`)
         .then((res) => {
            const s = res.data[0];
            setName(s.name);
            setEmail(s.email);
            setPassword(s.password);
         })
         .catch((err) => {
            console.log(err);
         });
   }, [id]);

   const handleSubmit = (e) => {
      e.preventDefault();
      axios.put(`http://localhost:3011/admin/${id}`, {
         name,
         email,
         password
      })
         .then((res) => {
            alert('uploaded');
            navigate('/admin');
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <div>
         <center><h1>ADMIN UPDATE</h1></center>
         <div className='i'>
            <br />
            <form onSubmit={handleSubmit}>
               <div>
                  <label className='l'>NAME</label>
                  <br />
                  <br />
                  <input type='text' className='imn' value={name} onChange={(e) => setName(e.target.value)} />
               </div>
               <br />
               <div>
                  <label className='l'>EMAIL</label>
                  <br />
                  <br />
                  <input type='email' className='imn' value={email} onChange={(e) => setEmail(e.target.value)} />
               </div>
               <br />
               <div>
                  <label className='l'>PASSWORD</label>
                  <br />
                  <br />
                  <input type='password' className='imn' value={password} onChange={(e) => setPassword(e.target.value)} />
               </div>
               <br />
               <button className='d' type='submit'>update</button>
            </form>
         </div>
      </div>
   );
}

export default AdminUp;
