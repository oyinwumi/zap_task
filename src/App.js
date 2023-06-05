import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/resetpassword' element={<ResetPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
