export default function TaskItem({ id, task }) {
    return (
        <li key={id}>
            <strong>{task.title}</strong> -{" "}
            {task.completed ? "Completada" : "Pendiente"}
        </li>
    )
}


