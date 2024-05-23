import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacto from './components/Contactanos/Contacto'
import Error404 from './components/Error404/Error404'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {
  

  return (
    <BrowserRouter> 
      <Routes>
        <Route path='/' element ={<Contacto />} /> 
        <Route path='error404' element ={<Error404 />} />   

      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


