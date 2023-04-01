

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {


    const {nombre, propietario, email, alta, sintomas,id} = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Estas seguro que deseas eliminar este paciente?');

        if(respuesta){
            eliminarPaciente(id);
        }
    }

    return(
        <div className="bg-white m-5 shadow-md py-7 px-5 rounded-lg">
                <p className="block text-gray-700 uppercase font-medium">
                    Nombre: {' '}
                    <span className="font-normal normal-case">{nombre}</span>
                </p>
                <p className="block text-gray-700 uppercase font-medium">
                    Propietario: {' '}
                    <span className="font-normal normal-case">{propietario}</span>
                </p>
                <p className="block text-gray-700 uppercase font-medium">
                    Email: {' '}
                    <span className="font-normal normal-case">{email}</span>
                </p>
                <p className="block text-gray-700 uppercase font-medium">
                    Fecha Alta: {' '}
                    <span className="font-normal normal-case">{alta}</span>
                </p>
                <p className="block text-gray-700 uppercase font-medium">
                    Síntomas: {' '}
                    <span className="font-normal normal-case">{sintomas}</span>
                </p>

                <div className="flex justify-end gap-2.5">
                    <button 
                        type="button"
                        className="py-2 px-12 bg-indigo-600 mt-5 text-white font-medium uppercase hover:bg-indigo-800 cursor-pointer transition-colors rounded"
                        onClick={() => setPaciente(paciente)}
                    >Editar</button>

                    <button 
                        type="button"
                        className="py-2 px-10 bg-rose-600 mt-5 text-white font-medium uppercase hover:bg-rose-700 cursor-pointer transition-colors rounded"
                        onClick={ handleEliminar}
                    >Eliminar</button>
                </div>
                
            </div>
    )
}

export default Paciente;