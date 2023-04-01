import { useEffect, useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

function App() {
  
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});

  
  // Creando funcion que recibirá el id del elemento a eliminar y filtarlo para ctualizar el array.
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);

    // Seteando el estado de pacientes con el array filtrado, sin el elemento a eliminar
    setPacientes(pacientesActualizados);
  }

  // Creando un useEffect para comprobar al inicio si existe informacion den el localStorage, y si es así cargarla al inicio de la aplicación, este useEffect solo se renderiza un sola vez.




  // Utilizando 'LocalStorage' para guardal el arreglo en memoria y tenga mayor persistencia, con un useEffect
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes]); 


  return (
    <div className='container mx-auto mt-5'>
      < Header 
        
      />

      <div className='mt-12 md:flex'>
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}
        setPaciente={setPaciente}
      />
      <ListadoPacientes 
        pacientes={ pacientes }
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
