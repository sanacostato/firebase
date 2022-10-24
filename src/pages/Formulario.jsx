import { useState } from "react";
import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "../firebase";
import Swal from 'sweetalert2';

function Formulario() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    puesto: '',
    fecha_contratacion: '',
});
const handleInputChange = (event) => {
  setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
  });
}
const guardarFormulario = async (event) =>{
  event.preventDefault();
  console.log(formulario);
  await addDoc(collection(db, "empleados"), formulario );
  Swal.fire(
    'Mensaje',
    'Formulado enviado a la base de datos',
    'success',
  ).then(()=>{
    window.location.href = "/tabla";
  });

};
    return ( 
        <>
        <code>{JSON.stringify(formulario)}</code>
        <form onSubmit={guardarFormulario}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" className="form-control" name='nombre' onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Puesto</label>
          <input type="text" className="form-control" name='puesto'onChange={handleInputChange}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de contratacion</label>
          <input type="date" className="form-control" name='fecha_contratacion'onChange={handleInputChange}/>
        </div>
        
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
        </>
      
     );
}

export default Formulario;