import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList.jsx";

export default function App() {
    // Estado para guardar las tareas
    const [tasks, setTasks] = useState([]);

    // Cargar tareas al montar el componente
    useEffect(() => {
        // Llamada a la API pública
        fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then((response) => response.json())
            .then((data) => setTasks(data))
            .catch((error) => console.error("Error al cargar tareas:", error));
    }, []); // [] asegura que solo se ejecute al montar

    //Función para añadir tarea, que la pasaremos como prop al componente TaskForm
    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    }

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <TaskForm addTask={addTask} />
            <TaskList tasks={tasks} />
        </div>
    );
}
