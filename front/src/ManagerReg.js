import React, { useState } from 'react';
import './managerreg.css';
import { NavLink } from 'react-router-dom';
import axios  from 'axios';

function ManagerReg() {
const [name,setName] = useState('');
const[email,setEmail] = useState('');
const [mobile,setMobile] = useState('');
const [experience,setExperience] = useState('');
const [joiningdate,setJoiningDate] = useState('');
const [department,setDepartment] = useState('');
const [password,setPassword] = useState('');
const [role,setRole] = useState('');
const [status,setStatus] = useState('');
const [salary,setSalary] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3011/managerreg', {
        name,
        email,
        mobile,
        experience,
        joiningdate,
        department,
        password,
        role,
        salary
    })
    .then((response) => {
        setStatus(response.data.message);
        alert('Data uploaded successfully');
        setName("");
        setEmail("");
        setMobile("");
        setExperience("");
        setJoiningDate("");
        setDepartment("");
        setPassword("");
        setRole("");
        setSalary("");
       
    })
    .catch((err) => {
        console.error(err);
        alert('An error occurred while uploading data');
    });
}


  return (
    <div >
        
        <div>
            
        </div>
        <div className='mm'>
        <form onSubmit={handleSubmit}>
            <div className='upload'>
<div className='bm' >
    <button className='btm'><NavLink to='/managerreg' style={{textDecoration:'none',color:'aliceblue'}}>manager</NavLink></button> 
    <button className='btm'><NavLink to='/employeereg'style={{textDecoration:'none',color:'aliceblue'}}>employee</NavLink></button>
</div>
<center><h3>MANAGER DEATAILS</h3></center>

<div>
    <label className='labelm'>Name :</label><br/>
    <input type='text' id='name' placeholder='enter name' className='im' value={name} onChange={(e) => setName(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Email :</label><br/>
    <input type='email' id='email' placeholder='enter email' className='im' value={email} onChange={(e) => setEmail(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Mobile :</label><br/>
    <input type='tel' id='mobile' placeholder='enter phone no' className='im' value={mobile} onChange={(e) => setMobile(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Experiance :</label><br/>
    <input type='text' id='exper' placeholder='enter experience' className='im'  value={experience} onChange={(e) => setExperience(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Date of Joining :</label><br/>
    <input type='date' id='date' placeholder='enter joiningdate' className='im' value={joiningdate} onChange={(e) => setJoiningDate(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Department :</label><br/>
    <input type='text' id='depart' placeholder='enter department' className='im' value={department}  onChange={(e) => setDepartment(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Password :</label><br/>
    <input type='password' id='psd' placeholder='enter password' className='im'  value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Role :</label><br/>
    <input type='text' id='role' placeholder='enter role' className='im' value={role}  onChange={(e) => setRole(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
&ensp;
<div>
    <label className='labelm'>Salary :</label><br/>
    <input type='text' id='salary' placeholder='enter salary' className='im' value={salary}  onChange={(e) => setSalary(e.target.value)} style={{width:'160px',height:'11px'}} required/>
</div>
<br/>
<button type='submit' className='buttonm'>UPLOAD</button>
</div>
<br/>
<p>{status}</p>
        </form>
        </div>
        
    </div>
  )
}

export default ManagerReg