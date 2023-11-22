import './App.css';
import ListEmpleadosComponent from "./Componentes/ListEmpleadosComponent";
import HeaderComponente from "./Componentes/HeaderComponente";
import FooterComponente from "./Componentes/FooterComponente";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <HeaderComponente/>
                <div className='container'>
                    <Routes>
                        <Route exact path='/' element={<ListEmpleadosComponent/>}></Route>
                        <Route exact path='/empleados' element={<ListEmpleadosComponent/>}></Route>
                    </Routes>
                </div>
                <FooterComponente/>
            </BrowserRouter>
        </div>
    );
}

export default App;
