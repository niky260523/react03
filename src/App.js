import { useEffect,useState } from 'react';
import AppForm from './componentes/AppForm';
import logo from './logo.svg';
//import './App.css';
import C01componente from './componentes/C01componente';
import{collection,deleteDoc,doc,onSnapshot,query} from 'firebase/firestore';
import { db } from './componentes/firebase';
import {deleteApp} from 'firebase/app';

function App() {

  /// READ - LECTURA - fnRead /////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
  try {
    const xColeccionConQuery =query (collection(db,'persona'));
    const unsuscribete = onSnapshot(xColeccionConQuery, (xDatosBD) => {
      const xdoc= [];
      xDatosBD.forEach((doc) => {
        xdoc.push({id:doc.id,...doc.data()});
      });
  setDocBD(xdoc);
    });
  } catch (error) {
  console.error(error);
    }
  }
  fnRead(); //Prueba sin useEffect
  //useEffect( () =>{fnRead();}, []);

//// DELETE - Eliminar - fnDelete ////
  const [idActual, setIdActual] = useState("");
  const fnDelete = (xId) => {

  }
    return (
    <div style={{width:"350px", background:"greenyellow",padding:"10px"}}>
      <h1>sitiocopia2a3 (App.js)</h1>
      <h3>READ  / DELETE</h3>
      <AppForm {...{idActual, setIdActual, fnRead}}/>
      {
        docBD.map((p) =>
        <p key={p.id}>
          No. 1{p.nombre}...
          <span onclick={() => fnDelete(p.id)}>x</span>
          ...
          <span onclick={() => fnDelete(p.id)}>x</span>
        </p>
      )
    } 
     
     </div>

  
  );
}

export default App;