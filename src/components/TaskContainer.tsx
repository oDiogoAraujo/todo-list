import { useContext } from "react";
import { TaskContext } from "../contexts/TaskContext";
import { Task } from "./Task";
import { TaskCounter } from "./TaskCounter";
import { EmptyTasks } from "./EmptyTasks";

export function TaskContainer() {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            <TaskCounter />

            {tasks.length > 0 &&
                <div>
                    {tasks.map((task, index) => (
                        <span key={index}>
                            <Task id={task.id} text={task.text} isCompleted={task.isCompleted} />
                        </span>
                    ))}
                </div>
            }
            {tasks.length == 0 &&
                <EmptyTasks />
            }

        </div >
    )
}