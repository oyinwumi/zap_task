import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword'
import Dashboard from './components/Dashboard';
import ResetPasswordModal from './pages/ResetPasswordModal';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/resetpassword' element={<ResetPassword/>}/>
          <Route path='/resetpasswordmodal' element={<ResetPasswordModal/>}/>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
