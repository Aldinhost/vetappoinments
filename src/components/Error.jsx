const Error = ({children}) => {

    return (
        <div className='bg-red-200 py-2 px-4 text-red-600 rounded mb-3'> 
        <p>
            {children}
        </p> 
    </div>
    )
    
}

export default Error;