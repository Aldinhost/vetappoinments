import { useEffect } from "react";

import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

    useEffect(() => {
        if(pacientes.length > 0) {
            // console.log('nuevo paciente')
        }  
    },[pacientes])

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (

                <>
                    <h2 className="font-bold text-xl text-center">Listado Pacientes</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Administra tus {' '}
                        <span className="text-indigo-600 font-semibold">Pacientes y Citas</span>
                    </p>
            
                    {pacientes.map((paciente) => {

                        return (
                            <Paciente
                                key={paciente.id} 
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        )
                    })}
                </>

            ) : (
                <>
                    <h2 className="font-bold text-xl text-center">No hay pacientes en Lista</h2>
                    <p className="text-lg mt-5 text-center mb-10">
                        Comienza agregando pacientes {' '}
                        <span className="text-indigo-600 font-semibold">y apareceran en la lista.</span>
                    </p>
                </>
            )}

        </div>  

            
    )
}

export default ListadoPacientes;