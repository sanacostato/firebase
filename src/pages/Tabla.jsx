import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";

function Tabla() {
  const [datos, setDatos] = useState([]);
  const getData = async () => {
    // const snapshot = await getDocs(collection(db, "empleados"));
    // console.log(snapshot.docs.map((doc) => doc.data()));
    // setDatos(snapshot.docs.map((doc) => doc.data()));

    onSnapshot(collection(db, "empleados"), (querySnapshot) => {
      setDatos(querySnapshot.docs.map(doc => {
          return { ...doc.data()}
      }));
  });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <code>{JSON.stringify(datos)}</code>
    <table className="table table-borderd">
      <thead className="table-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Puesto</th>
          <th scope="col">Fecha de contratacion</th>
        </tr>
      </thead>
      <tbody>
       {
        datos.map((empleado, index) => {
            return(
                <tr key={index}>
                <th >{index}</th>
                <td>{empleado.nombre}</td>
                <td>{empleado.puesto}</td>
                <td>{empleado.fecha_contratacion}</td>
              </tr>
            )
        })
       } 
      </tbody>
    </table>
    </>
  );
}

export default Tabla;
