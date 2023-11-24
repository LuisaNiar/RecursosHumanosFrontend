import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HeaderComponente from "./Componentes/HeaderComponente";
import ListEmpleadosComponent from "./Componentes/Empleado/ListEmpleadosComponent";
import Login from "./Componentes/Login";
import AgregarEmpleadoComponente from "./Componentes/Empleado/AgregarEmpleadoComponente";
import ActualizarEmpleadoComponente from "./Componentes/Empleado/ActualizarEmpleadoComponente";
import empleadoServicio from "./Servicios/EmpleadoServicio";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponente/>
                <div className='container'>
                    <Routes>
                        <Route exact path='/empleados' element={<ListEmpleadosComponent/>}></Route>
                        <Route exact path='/' element={<ListEmpleadosComponent/>}></Route>
                        <Route exact path='/agregar-empleado' element={<AgregarEmpleadoComponente/>}></Route>
                        <Route exact path='/editar-empleado/:id' element={<ActualizarEmpleadoComponente/>}></Route>
                        <Route exact path='/iniciar-sesion' element={<Login/>}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
