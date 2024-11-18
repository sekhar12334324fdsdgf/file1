import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Finance() {
    const [edata, setEdata] = useState([]);
    const [mdata, setMdata] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3011/managerd')
            .then((response) => {
                setMdata(response.data);
            })
            .catch((error) => console.log("Error fetching data:", error));

        axios.get('http://localhost:3011/employee')
            .then((response) => {
                setEdata(response.data);
            })
            .catch((error) => console.log("Error fetching data:", error));
    }, []);

    return (
        <div style={{ display: 'flex',gap:'500px',marginTop:'100px',marginBottom:'70px' }}>
           
            <table border='1' style={{marginLeft:'50px'}} >
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROLE</th>
                      
                        <th>SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {mdata.map((m) => (
                        <tr key={m.id}>
                            <td>{m.name}</td>
                            <td>{m.role}</td>
                           
                            <td>{m.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table border='1' >
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROLE</th>
                      
                        <th>SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {edata.map((e) => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.role}</td>
                           
                            <td>{e.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          
        </div>
    );
}

export default Finance;
