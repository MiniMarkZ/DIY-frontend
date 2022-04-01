import {  Routes, Route } from 'react-router-dom';
import Admin from './Admin';
import './App.css';
import Home from './Components/Home';
import Import from './Components/Import';

function App() {
  return (
    <div>
      <Admin/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/import" element={<Import/>}/>
      </Routes>
    </div>
  );
}

export default App;
