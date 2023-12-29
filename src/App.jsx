import Title from './components/Title';
import Contador from './components/Contador';
import './App.css';
import useCountdown from './hooks/userCountdown';
import Fundo from "./assets/fundo.jpg"
import React, { useState } from 'react';


function App() {
  const [userDate, setUserDate] = useState(''); 
  const [day, hour, minute, second] = useCountdown(userDate);

  const handleDateChange = (event) => {
    setUserDate(event.target.value);
  };

  return (
    <div className='App' style={{backgroundImage: `url(${Fundo})`}}>
      <div className='container'>
        <Title title='Contagem Regressiva'/>
        
        <input
          type="text"
          placeholder="Insira a data no formato: MM, DD, YYYY"
          value={userDate}
          onChange={handleDateChange}
        />

        <div className='countdown-container'>
          <Contador title='Dias' number={day}/>
          <Contador title='Horas' number={hour}/>
          <Contador title='Minutos' number={minute}/>
          <Contador title='Segundos' number={second}/>
        </div>
      </div>
    </div>
  );
}

export default App;
