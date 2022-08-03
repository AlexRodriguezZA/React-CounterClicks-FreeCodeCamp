import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react'; 

function App() {
  const [NumClics, setNumClics] = useState(0);

  const incrementarClick = ()=>{
    setNumClics(NumClics + 1);
  };

  const decrementaeClick = ()=>{
    setNumClics(NumClics - 1);
  };

  const Reiniciarcontador = ()=>{
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className='contenerdor-principal'>
        <h1>Contador de clicks</h1>
        <Contador
          numeroClicks={NumClics}
        />
        {/* componente 1 boton click */}
        <Boton 
          texto='Click'
          esBotonDeclick={true}
          manejarClick={incrementarClick}
        />
        {/* componente 1 boton click -1 */}
        <Boton 
          texto='Click -1'
          esBotonDeclick={true}
          manejarClick={decrementaeClick}
        />
        {/* componente 3 boton reinciar */}
        <Boton 
          texto='Reiniciar'
          esBotonDeclick={false} 
          manejarClick={Reiniciarcontador}
        />

      </div>
    </div>
  );
}

export default App;
