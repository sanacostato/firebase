import {Navigate, Route, Routes} from 'react-router-dom';
import Formulario from "../pages/Formulario";
import Home from "../pages/Home";
import Tabla from "../pages/Tabla";

function AppRouter() {
    return ( 
        <>
        <Routes>
            <Route path="home" element={<Home/>} />
            <Route path="formulario" element={<Formulario/>} />
            <Route path="Tabla" element={<Tabla/>} />

            <Route path="/" element={<Navigate to="/home"/>} />
            <Route
            path="*" element={
                <main style={{padding:"1rem"}}>
                    <p> There is nothing here</p>
                </main>
            }
            />
        </Routes>
        </>
     );
}

export default AppRouter;