import axios from "axios";

const EMPLEADO_BASE_REST_API_URL = "http://localhost:8080/empleado";

class EmpleadoServicio {
    getAllEmpleados() {
        return axios.get(EMPLEADO_BASE_REST_API_URL);
    }
}

export default new EmpleadoServicio();