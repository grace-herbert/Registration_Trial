
import './App.css';
import Login from './Pages/Login.js';
import VoucherPg from './Pages/VoucherPg';
import Registration from './Pages/Registration.js';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <Router>
      <div className="App">
      <ToastContainer position="top-center"/>      
        <Routes>
        <Route exact path="/voucher" element={<VoucherPg />} />
        <Route exact path="/" element={<Registration />} />
        <Route exact path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
