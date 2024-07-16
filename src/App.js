import logo from './logo.svg';
import './App.css';
import Heder from './components/Home/Heder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Home/Navbar';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
     <Home/>
    </div>
  );
}

export default App;
