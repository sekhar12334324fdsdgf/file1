import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import './header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Header() {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const Logout = () => {
        localStorage.removeItem('employeeId');
        localStorage.removeItem('managerName');
        localStorage.removeItem('department');
        localStorage.removeItem('role');
          navigate('/'); // Optionally navigate to login page
    };

    const getData = (e) => {
        e.preventDefault();
        axios.get('http://localhost:3011/manager')
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => console.log("Error fetching data:", error));
    };

    return (
        <div>
            <div className='head'>
                <div>
                    <div className='right' style={{display:'flex'}}>
                        {role === 'admin' && (
                            <>
                                <div>
                                    <NavLink to='/admin' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                        <p style={{ display: 'flex', gap: '10px' }}>
                                            <AccountBoxRoundedIcon />
                                            <strong>ADMIN</strong>
                                        </p>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to='/dashboard' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                        <p style={{ display: 'flex', gap: '10px' }}>
                                            <HomeTwoToneIcon />
                                            <small>HOME</small>
                                        </p>
                                    </NavLink>
                                </div>
                                <div onClick={getData}>
                                    <NavLink to='/managerd' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                        <p style={{ display: 'flex', gap: '10px' }}>
                                            <ManageAccountsRoundedIcon />
                                            <small>MANAGER</small>
                                        </p>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to='/employeed' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                        <p style={{ display: 'flex', gap: '10px' }}>
                                            <GroupsRoundedIcon />
                                            <small>EMPLOYEES</small>
                                        </p>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to='/managerreg' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                        <p style={{ display: 'flex', gap: '10px' }}>
                                            <HowToRegIcon />
                                            <small>REGISTER</small>
                                        </p>
                                    </NavLink>
                                </div>
                                <div>
                                    <NavLink to='/finance' style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                        <p style={{ display: 'flex', gap: '10px' }}>
                                            <CurrencyBitcoinOutlinedIcon />
                                            <small>SALARYS</small>
                                        </p>
                                    </NavLink>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div  className='left'>
                    {(role === 'admin' || role === 'employee' || role === 'manager') && (
                        <div style={{marginLeft:''}}>
                            <NavLink to='/' onClick={Logout} style={{ textDecoration: 'none', color: 'whitesmoke' }}>
                                <ExitToAppIcon />
                                <small>LOGOUT</small>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header