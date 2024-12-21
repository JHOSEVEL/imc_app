
import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    if (!weight || !height) {
      setMessage('Por favor insira seu peso e sua altura.');
      return;
    }
    /*aqui calcula o peso e altura do individuo*/

    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);

    /*fim*/


    /*aqui se faz uma condiçao sobre imc*/

    if (calculatedBmi < 18.5) {
      setMessage('Abaixo do peso');
    } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
      setMessage('IMC normal');
    } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
      setMessage('Sobrepeso');
    } else {
      setMessage('Obesidade! cuide-se');
    }
  };

  /*fim*/

  /*aqui limpa as informaçoes inserida*/

  const resetCalculator = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  /*fim*/

  return (
    <div className="App">
      <h1>Calcular IMC</h1>
      <div className="calculator-container">
        <input
          type="number"
          placeholder="Seu peso em (kg)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Sua altura em (cm)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <button onClick={calculateBMI}>CALCULAR</button>
        <button onClick={resetCalculator}>LIMPAR</button>
        {bmi && (
          <div className="result">
            <p>SEU IMC É: {bmi}</p>
            <p>VOÇÊ ESTA: {message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;



