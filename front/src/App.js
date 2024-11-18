import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import ManagerReg from './ManagerReg';
import EmployeeReg from './EmployeeReg';
import Manager from './Manager';
import Employee from './Employee';
import Admin from './Admin';
import Managerd from './Managerd';
import Employeed from './Employeed';
import AdminUp from './AdminUp';
import Header from './Header';
import Footer from './Footer';
import Finance from './Finance';

function App() {
  
    return (
        <div className="App">
            <Header  />
            <Routes>
                <Route path='/' element={<Login  />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/managerreg' element={<ManagerReg />} />
                <Route path='/employeereg' element={<EmployeeReg />} />
                <Route path='/manager' element={<Manager />} />
                <Route path='/employee' element={<Employee />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/managerd' element={<Managerd />} />
                <Route path='/employeed' element={<Employeed />} />
                <Route path='/admin/adminup/:id' element={<AdminUp />} />
                <Route path='/finance' element={<Finance/>}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
