import { useState } from "react"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


const Form =()=>{
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        domicilio: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault(); 
        
        Swal.fire({
          title: "Compra Completada!",
          text: "¡La recibirás entre 7 días y 1 año!",
          icon: "success",
          timer: 3000,
        }).then(() => {

          setTimeout(() => {
            window.location.reload();
            window.location.href = "/cart";
          }, 3000);
        });
    

        setFormData({
          nombre: '',
          email: '',
          domicilio: ''
        });
      };
    
      return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div>
            <label 
            htmlFor="nombre"
            className="block text-gray-700 text-sm text-center font-bold mb-2"
            >Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label 
            htmlFor="email"
            className="block text-gray-700 text-sm text-center font-bold mb-2"
            >Correo:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div>
            <label 
            className="block text-gray-700 text-sm text-center font-bold mb-2"
            htmlFor="domicilio"
            >Domicilio:</label>
            <input
              type="text"
              id="domicilio"
              name="domicilio"
              value={formData.domicilio}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          >Terminar compra</button>
        </form>
      );
}

export default Form;