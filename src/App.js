import './App.css';
import PrivateRouter from './components/PrivateRouter';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './components/pages/Auth'
import Reg from './components/pages/Reg'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/Registration' element={<Reg/>}/>
        <Route element={<PrivateRouter/>}> 
          <Route>
            <Route path='/lk' element={<About/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
