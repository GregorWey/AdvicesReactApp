import { useState } from 'react';
import {FiSearch} from 'react-icons/fi';
import './App.css';
import api from './services/api';

function App() {

  const [advice,setAdvice]=useState([]);

  async function handleAdvice(){
    try{
      const response = await api.get(""); 
      setAdvice(response.data.slip);
      console.log(advice);
   }catch{
      alert("Erro ao buscar")
   }
  }

  return (
    <div className="App">
      <div class="container">
        <div class="title">
          <h1>Advice of the day</h1>
        </div>
      <button className="buttonSearch" onClick={handleAdvice}>
        <FiSearch size={25} color="#fff"/>
      </button>
      <div className="advice">
        <span>{advice.advice} </span>
      </div>
      </div>
    </div>
  );
}

export default App;
