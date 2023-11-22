import React, {useEffect, useState} from "react";
import EmpleadoServicio from "../Servicios/EmpleadoServicio";

export const ListEmpleadosComponent = () => {

    const [empleados, setEmpleados] = useState([]);

    useEffect(() => {
        EmpleadoServicio.getAllEmpleados().then(response => {
            setEmpleados(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <div className='container'>
            <h2 className='text-center'>Lista Empleados</h2>
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
                            </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmpleadosComponent;