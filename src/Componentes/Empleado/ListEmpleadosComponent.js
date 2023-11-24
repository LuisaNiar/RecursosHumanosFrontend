import React, {useEffect, useState} from "react";
import EmpleadoServicio from "../../Servicios/EmpleadoServicio";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export const ListEmpleadosComponent = () => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        listarEmpleados()
    }, []);

    const listarEmpleados = () => {
        EmpleadoServicio.getAllEmpleados().then(response => {
            setEmpleados(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }

    const eliminarEmpleado = (empleadoId) => {
        EmpleadoServicio.eliminarEmpleado(empleadoId).then((response) => {
            listarEmpleados()
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='container'>
            <h2 className='text-center'>Lista Empleados</h2>
            <Link to='/iniciar-sesion' className='btn btn-primary mb-2'>Iniciar Sesión</Link>
            &nbsp;&nbsp;
            <Link to='/agregar-empleado' className='btn btn-primary mb-2'>Agregar Cliente</Link>
            <table className='table table-bordered table-striped'>
                <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>Telefono</th>
                <th>Puesto</th>
                <th>Salario</th>
                <th>Vacaciones</th>
                <th>Editar</th>
                <th>Eliminar</th>
                </thead>
                <tbody>
                {
                    empleados.map(
                        empleado =>
                            <tr key={empleado.id}>
                                <td>{empleado.id}</td>
                                <td>{empleado.nombre}</td>
                                <td>{empleado.apellido}</td>
                                <td>{empleado.cedula}</td>
                                <td>{empleado.telefono}</td>
                                <td>{empleado.puesto}</td>
                                <td>{empleado.salario}</td>
                                <td>{empleado.vacaciones}</td>
                                <td>
                                    <Link className='btn btn-info'
                                          to={`/editar-empleado/${empleado.id}`}>Actualizar</Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger'
                                            onClick={() => eliminarEmpleado(empleado.id)}>Eliminar
                                    </button>
                                </td>
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )

}


export default ListEmpleadosComponent;