import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Task } from "./Task";
import { TaskInfo } from "./TaskInfo";


// interface Task {
//     id: string
//     text: string
// }

export function TaskContainer() {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            <TaskInfo />
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