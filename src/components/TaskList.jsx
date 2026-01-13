import TaskItem from "./TaskItem.jsx";

export default function TaskList({tasks}) {
    return(
        <>
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </ul>
        </>
    )}

