import React, { useState, useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const navigate = useNavigate();
    

    useEffect(() => {
        
        localStorage.clear(); 
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("");
        axios.post("http://localhost:3011/login", { email, password })
            .then((response) => {
                const { role, name, department, id, salary } = response.data;
                localStorage.setItem('role', role);
                if (role === 'admin') {
                    navigate("/dashboard?refresh=true");
                } else if (role === 'manager') {
                    localStorage.setItem('managerName', name);
                    localStorage.setItem('department', department);
                    localStorage.setItem('salary', salary);
                    navigate("/manager?refresh=true");
                } else if (role === 'employee') {
                    localStorage.setItem('employeeId', id);
                    navigate("/employee?refresh=true");
                } else {
                    setStatus("Login failed for all roles.");
                }
            })
            .catch((error) => {
                console.error("Login error:", error);
                setStatus(error.response?.data?.error || "Login failed. Please try again.");
            });
    };

    return (
        <div>
            <div className="ll">
                <form onSubmit={handleSubmit}>
                    <div className="login">
                        <h1>LOGIN</h1>
                        <div className="divl">
                            <label className="labell">Email :</label>
                            <input
                                type="email"
                                placeholder="enter email"
                                className="inpitl"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <br />
                        <div className="divl">
                            <label className="labelll">Password :</label>
                            <input
                                type="password"
                                placeholder="enter password"
                                className="inpitl"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <br />
                        <center>
                            <button type="submit" className="buttonl">
                                Login
                            </button>
                        </center>
                    </div>
                    <p>{status}</p>
                </form>
            </div>
        </div>
    );
}

export default Login;
