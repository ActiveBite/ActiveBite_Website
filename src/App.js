import './App.css';
import PrivateRouter from './components/PrivateRouter';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<About/>}/>
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
