import Home from './pages/Home.js'
import Register from './pages/Register.js';
import { AuthProvider } from './context/auth.js';
import Nav from './components/nav/Nav.js';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <AuthProvider>
          <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/Register' element={ <Register/> } />
          </Routes>
        </AuthProvider>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
