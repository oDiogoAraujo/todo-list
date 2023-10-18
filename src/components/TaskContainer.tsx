import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Task } from "./Task";
import { TaskCounter } from "./TaskCounter";

export function TaskContainer() {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            <TaskCounter />
            <div>
                {tasks.map( (task, index) => (
                    <span key={index}>
                        <Task id={task.id} text={task.text} />
                    </span>
                ))}
            </div>
        </div>
    )
}