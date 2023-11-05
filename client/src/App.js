import Home from './pages/Home.js'
import Register from './pages/Register.js';
import { AuthProvider } from './context/auth.js';
import Nav from './components/nav/Nav.js';
import './App.css';

import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AccountActivate from './pages/auth/AccountActivate.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Toaster />
        <AuthProvider>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/register' element={ <Register/> } />
            <Route 
              path='/auth/account-activate/:token' 
              element={ <AccountActivate/> } 
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
