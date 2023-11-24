import axios from "axios";

const ADMIN_BASE_REST_API_URL = "http://localhost:8080/login";
const EMPLEADO_BASE_REST_API_URL = "http://localhost:8080/empleado";
const EMPLEADO_AGREGAR_REST_API_URL = "http://localhost:8080/empleado/agregar";
const EMPLEADO_ACTUALIZAR_REST_API_URL = "/empleado/actualizar/{id}";

class EmpleadoServicio {

    autenticacionAdmin(usuario) {
        return axios.post(ADMIN_BASE_REST_API_URL, usuario)
    }

    getAllEmpleados() {
        return axios.get(EMPLEADO_BASE_REST_API_URL);
    }

    crearEmpleado(empleado) {
        return axios.post(EMPLEADO_AGREGAR_REST_API_URL, empleado)
    }

    getEmpleadoById(empleadoId) {
        return axios.get(EMPLEADO_ACTUALIZAR_REST_API_URL, empleadoId);
    }


}

export default new EmpleadoServicio();