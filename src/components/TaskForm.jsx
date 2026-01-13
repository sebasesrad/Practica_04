import { useState } from "react";

export default function TaskForm({ addTask }) {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita recargar la página

        if (!newTaskTitle.trim()) return; // No añadir tareas vacías

        const newTask = {
            id: Date.now(),        // ID temporal único
            title: newTaskTitle,
            completed: false
        };

        // Llamada POST a la API (aunque no persista realmente)
        fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        })
            .then((res) => res.json())
            .then(() => {
                addTask(newTask);        // Actualiza estado en App
                setNewTaskTitle("");     // Limpia input
            })
            .catch((err) => console.error(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nueva tarea"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                required
            />
            <button type="submit">Añadir tarea</button>
        </form>
    );
}
