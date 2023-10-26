import { useState } from 'react';

import logo from './logo.svg';
//import './App.css';
import C01componente from './componentes/C01componente';
import AppForm from './componentes/AppForm';

function App() {

  /// READ - LECTURA - fnRead /////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
  }
  //// DELETE - Eliminar - fnDelete ////
  const [idActual, setIdActual] = useState("");
  const fnDelete = (xId) => {

  }

  return (
    <div style={{width:"350px", background:"greenyellow",padding:"10px"}}>
    <AppForm /> 
     <p>No 1 Juan Manuel  x  A</p>
     <p>No 1 Rosa Maria  x  A</p>
     
     
    </div>
  );
}

export default App;