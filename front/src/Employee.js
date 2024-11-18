import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Empdetails() {
    const [data, setData] = useState(null);
    const employeeId = localStorage.getItem('employeeId');

    useEffect(() => {
        if (employeeId) {
            console.log("Fetching data for employeeId:", employeeId); 
            axios.get(`http://localhost:3011/employe/${employeeId}`)
                .then((response) => {
                    if (response.data) {
                        setData(response.data[0]); 
                    } else {
                        alert('Error fetching data');
                    }
                })
                .catch((err) => {
                    console.error("Error fetching data:", err);
                    alert('Error fetching data');
                });
        } else {
            console.error("employeeId is undefined.");
            alert('No employee ID found. Please log in again.');
        }
    }, [employeeId]);

    return (
        <div>
            <div style={{ height: '550px' }}>
                <center>
                    {data ? (
                        <table border={'1px'} style={{ borderCollapse: "collapse",width:'90%',marginTop:'40px',borderRadius:'80px' }}>
                            <thead>
                                <tr>
                                    <th>NO</th>
                                    <th>NAME</th>
                                    <th>EMAIL</th>
                                    <th>MOBILE</th>
                                    <th>DESIGNATION</th>
                                    <th>REPORTED </th>
                                    <th>DATE OF JOIN</th>
                                    <th>Salary</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key={data.id}>
                                    <td>{data.no}</td>
                                    <td>{data.name}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobile}</td>
                                    <td>{data.designation}</td>
                                    <td>{data.reported}</td>
                                    <td>{data.joiningdate}</td>
                                    <td>{data.salary}</td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <p>No data available</p>
                    )}
                </center>
            </div>
        </div>
    );
}
