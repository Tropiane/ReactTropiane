import { useState } from "react"


const Form =()=>{
    const [error, setError] = useState(false);
    const [alerta, setAlerta] = useState("");

    const handleClick =(e)=>{
        e.preventDefault()
    }

    const handleKeyDown =(e)=>{
        if (e.key == "1") {
            e.preventDefault()
            setError(true)
            setAlerta("No se puede usar el numero 1")
        }else{
            setError(false)
        }
    }

    return(
        <div className="cartForm w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">

                    <label className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
                    {error ? <p className="font-bold">{alerta}</p> : null}

                    <input type="text" name="nombre" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onKeyDown={handleKeyDown}/>
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>

                    <input type="email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onKeyUp={handleKeyDown}/>

                </div>
                
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleClick}>Enviar</button>
            </form>
        </div>
    )
}

export default Form;