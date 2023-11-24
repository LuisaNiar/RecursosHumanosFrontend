import React, {useEffect, useState} from 'react';
import EmpleadoServicio from "../../Servicios/EmpleadoServicio";
import {Link, useNavigate, useParams} from "react-router-dom";

export const ActualizarEmpleadoComponente = () => {


    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [cedula, setCedula] = useState('');
    const [telefono, setTelefono] = useState('');
    const [puesto, setPuesto] = useState('');
    const [salario, setSalario] = useState('');
    const [vacaciones, setVacaciones] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const actualizarEmpleado = (e) => {
        e.preventDefault();
        const empleado = {nombre, apellido, cedula, telefono, puesto, salario, vacaciones}
        EmpleadoServicio.actualizarEmpleado(id, empleado).then((response) => {
            console.log(response.data);
            navigate('/empleados');
        }).catch(error => {
            console.log(error)
        })
    }


    useEffect(() => {
        EmpleadoServicio.getEmpleadoById(id).then((response) => {
            setNombre(response.data.nombre)
            setApellido(response.data.apellido)
            setCedula(response.data.cedula)
            setTelefono(response.data.telefono)
            setPuesto(response.data.puesto)
            setSalario(response.data.salario)
            setVacaciones(response.data.vacaciones)
        }).catch(error=>{
            console.log(error);
        })
    })

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        <h2 className='text-center'>
                            <h2 className='text-center'>Actualizar Empleado</h2>
                        </h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Nombres</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su nombre'
                                        name='nombre'
                                        className='form-control'
                                        value={nombre}
                                        onChange={(e) => setNombre(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Apellidos</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su apellido'
                                        name='apellido'
                                        className='form-control'
                                        value={apellido}
                                        onChange={(e) => setApellido(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Cedula</label>
                                    <input
                                        type='number'
                                        placeholder='Digite su cedula'
                                        name='cedula'
                                        className='form-control'
                                        value={cedula}
                                        onChange={(e) => setCedula(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Celular</label>
                                    <input
                                        type='tel'
                                        placeholder='Digite su numero de celular'
                                        name='telefono'
                                        className='form-control'
                                        value={nombre}
                                        onChange={(e) => setTelefono(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Puesto</label>
                                    <input
                                        type='text'
                                        placeholder='Digite su puesto de trabajo'
                                        name='puesto'
                                        className='form-control'
                                        value={puesto}
                                        onChange={(e) => setPuesto(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Salario</label>
                                    <input
                                        type='number'
                                        placeholder='Digite el valor del salario'
                                        name='salario'
                                        className='form-control'
                                        value={salario}
                                        onChange={(e) => setSalario(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>Dias de vacaciones</label>
                                    <input
                                        type='number'
                                        placeholder='Digite sus dias de vacaciones'
                                        name='vacaciones'
                                        className='form-control'
                                        value={vacaciones}
                                        onChange={(e) => setVacaciones(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-success' onClick={(e) => actualizarEmpleado(e)}>Guardar</button>
                                &nbsp;&nbsp;
                                <Link to='/empleados' className='btn btn-danger'>Cancelar</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ActualizarEmpleadoComponente;