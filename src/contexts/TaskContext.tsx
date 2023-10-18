import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

interface Task {
    id: string
    text: string
    isCompleted: boolean
}

interface TaskContextProps {
    tasks: Task[]
    tasksCompleted: Task[],
    addTask: (text: string) => void
    removeTask: (id: string) => void
    completeTask: (id: string) => void;
}

interface TaskProviderProps {
    children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    tasksCompleted: [],
    addTask: () => { },
    removeTask: () => { },
    completeTask: () => { }
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);

    const addTask = (text: string) => {
        const newTask: Task = {
            id: uuidv4(),
            text: text,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
        setTasksCompleted(tasks.filter(task => task.id !== id))
    }

    const completeTask = (id: string) => {
        setTasks(
            tasks.map(task => {
                if (id === task.id) task.isCompleted = !task.isCompleted
                return task
            })
        )

        setTasksCompleted(
            tasks.filter(task => {
                if (task.isCompleted) return task
            })
        )
    }


    return (
        <TaskContext.Provider value={{ tasks, tasksCompleted, addTask, removeTask, completeTask }}>
            {children}
        </TaskContext.Provider>
    );
};
