import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import EmpleadoServicio from "../Servicios/EmpleadoServicio";

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const autenticacionAdmin = (e) => {
        e.preventDefault();
        const usuario = {username, password}
        EmpleadoServicio.autenticacionAdmin(usuario).then((response) => {
            console.log(response.data);
            navigate('/empleados');
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <h2 className='text-center'>Iniciar Sesión</h2>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Usuario:</label>
                                    <input
                                        type='text'
                                        name='username'
                                        className='form-control'
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Contraseña:</label>
                                    <input
                                        type='text'
                                        name='password'
                                        className='form-control'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <Link to='/empleados' className='btn btn-primary btn-block mb-4'>Ingresar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;