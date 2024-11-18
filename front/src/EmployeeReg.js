import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './employee.css';
import axios from 'axios';

function EmployeeReg() {
   
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [designation, setDesignation] = useState('');
    const [reported, setReported] = useState('');
    const [joiningdate, setJoiningDate] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('');
    const [salary,setSalary] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3011/employeereg", {
            
            name,
            email,
            mobile,
            designation,
            reported,
            joiningdate,
            password,
            role,
            salary
        })
        .then((response) => {
            setStatus(response.data.message);
            alert("Data uploaded");
            
       
            setName("");
            setEmail("");
            setMobile("");
            setDesignation("");
            setReported("");
            setJoiningDate("");
            setPassword("");
            setRole("");
            setSalary("");
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div>
            
            <div className='ee'>
                <form onSubmit={handleSubmit}>
                    <div className='do'>
                        <div className='be'>
                            <button className='bte'><NavLink to='/managerreg' style={{ textDecoration: 'none', color: 'aliceblue' }}>Manager</NavLink></button>
                            <button className='bte'><NavLink to='/employeereg' style={{ textDecoration: 'none', color: 'aliceblue' }}>Employee</NavLink></button>
                        </div>
                        <center><h3>EMPLOYEE DETAILS</h3></center>

                      
                        <div>
                            <label className='labele'>Name :</label>
                            <br/>
                            <input type='text' id='name' placeholder='Enter name' className='ie' value={name} onChange={(e) => setName(e.target.value)} style={{width:'160px'}} required />
                        </div>
                       &ensp;
                        <div>
                            <label className='labele'>Email :</label> <br/>
                            <input type='email' id='email' placeholder='Enter email' className='ie' value={email} onChange={(e) => setEmail(e.target.value)} style={{width:'160px'}} required />
                        </div>
                        &ensp;
                        <div>
                            <label className='labele'>Mobile :</label> <br/>
                            <input type='tel' id='mobile' placeholder='Enter phone no' className='ie' value={mobile} onChange={(e) => setMobile(e.target.value)} style={{width:'160px'}} required />
                        </div>
                        &ensp;
                        <div>
                            <label className='labele'>Designation :</label> <br/>
                            <input type='text' id='exper1' placeholder='Enter Designation' className='ie' value={designation} onChange={(e) => setDesignation(e.target.value)} style={{width:'160px'}} required />
                        </div>
                        &ensp;
                        <div>
                            <label className='labele'>Reported :</label> <br/>
                            <input type='text' id='depart' placeholder='Enter Reported' className='ie' value={reported} onChange={(e) => setReported(e.target.value)} required style={{width:'160px'}} />
                        </div>
                        &ensp;
                        <div>
                            <label className='labele'>Date of Joining :</label> <br/>
                            <input type='date' id='date' className='ie' value={joiningdate} onChange={(e) => setJoiningDate(e.target.value)} required  style={{width:'130px'}}/>
                        </div>
                        &ensp;
                        <div>
                            <label className='labele'>Password :</label> <br/>
                            <input type='password' id='psd' placeholder='Enter password' className='ie' value={password} onChange={(e) => setPassword(e.target.value)} style={{width:'160px'}} required />
                        </div>
                        &ensp;
                        <div>
                            <label className='labele'>Role :</label> <br/>   &ensp;
                            <input type='text' id='role' placeholder='Enter role' className='ie' value={role} onChange={(e) => setRole(e.target.value)}  style={{width:'160px'}} required />
                        </div>
                        &ensp;
                        <div>
                            <label className='labele'>Salary :</label> <br/>   &ensp;
                            <input type='text' id='salary' placeholder='Enter salary' className='ie' value={salary} onChange={(e) => setSalary(e.target.value)} style={{width:'160px',height:'11px'}} required />
                        </div>
                        <br />
                        <button type='submit' className='buttone'>UPLOAD</button>
                    </div>
                    <p>{status}</p>
                </form>
            </div>
            
        </div>
    );
}

export default EmployeeReg;
