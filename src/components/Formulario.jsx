import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente}) => {

    // DEFINICIÓN DE ESTADOS PARA INPUTS DE FORMULARIO
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=> {
        
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setAlta(paciente.alta)
            setSintomas(paciente.sintomas)
        }
        
    }, [paciente])


    // GENERAR ID
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        
        return  random + fecha;
    }


    // MANEJO DEL EVENTO SUBMIT
    const handleSubmit = (event) => {
        event.preventDefault();

        // VALIDACION DE FORMULARIO
        if( [nombre, propietario, email, alta, sintomas].includes('') ){
            setError(true);

            return;
        }

        setError(false);

        //CREANDO OBJETO DE PACIENTE, EL CUAL SE CREARÁ AL ENVIAR EL FORMULARIO
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            alta, 
            sintomas,
        }


        if(paciente.id){
            //Editando paciente
            objetoPaciente.id = paciente.id;

            const pacientesActualizado = pacientes.map((pacienteState) => pacienteState.id === paciente.id ? objetoPaciente : pacienteState);

            setPacientes(pacientesActualizado);
            setPaciente({})
            
        }else{
            // Nuevo Registro
            objetoPaciente.id  = generarId() // Se genera un ID antes de enviarle las demás propiedades del objeto.
            // Se crea una copia de lo que hay en pacientes y se le pasa el objetoPaciente.
            setPacientes([...pacientes, objetoPaciente]);
        }




        // REINICIANDO EL FORMULARIO
        setNombre('');
        setPropietario('');
        setEmail('');
        setAlta('');
        setSintomas('');

    }
    
    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-semibold">Administralos</span>
            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-7 px-5 mb-9 mx-5"
                onSubmit={ handleSubmit }
            >

                { error && 
                <Error > 
                    <span className='font-medium'>Error: </span>
                    Hay campos vacíos, todos los campos deben llenarse.    
                </Error>}


                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-medium">
                        Nombre Mascota:
                    </label>
                    <input 
                        id="mascota"
                        type="text"
                        placeholder="Capitán"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={nombre}
                        onChange={ (event) => setNombre (event.target.value) }
                    />
                </div> 
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-medium">
                        Nombre Propietario:
                    </label>
                    <input 
                        id="propietario"
                        type="text"
                        placeholder="Jhon Doe"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={propietario}
                        onChange={ (event) => setPropietario (event.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-medium">
                        Email:
                    </label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="mail@email.com"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={email}
                        onChange={ (event) => setEmail (event.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-medium">
                        Alta:
                    </label>
                    <input 
                        id="alta"
                        type="date"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={alta}
                        onChange={ (event) => setAlta (event.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-medium">
                        Síntomas:
                    </label>
                    <textarea 
                        id="sintomas"
                        placeholder="Describe los sintomas de tu mascota"
                        className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
                        value={sintomas}
                        onChange={ (event) => setSintomas (event.target.value) }
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full text-white p-3 font-semibold uppercase hover:bg-indigo-800 cursor-pointer transition-colors rounded"
                    value= {paciente.id ? 'Guardar' : 'Agregar Paciente'}
                />
            </form>
        </div>
    )
}


export default Formulario;