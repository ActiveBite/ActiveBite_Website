import './App.css';
import PrivateRouter from './components/PrivateRouter';
import About from './components/pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from './components/pages/Auth'
import Reg from './components/pages/Reg'
import Lk from './components/pages/Lk'
import Trainings from './components/pages/Trainings'
import Training from './components/pages/Training'
import NotFoundPage from './components/pages/NotFoundPage'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/registration' element={<Reg/>}/>
        <Route path='/' element={<About/>}/> 
        <Route path='*' element={<NotFoundPage/>}/>  
        <Route element={<PrivateRouter/>}> 
            <Route path='/lk' element={<Lk/>}/>
            <Route path='/training' element={<Training/>}/>
            <Route path='/trainings' element={<Trainings/>}/>
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
