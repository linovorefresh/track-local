import Home from './pages/Home.js'
import Register from './pages/Register.js';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/Register' element={ <Register/> } />
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
