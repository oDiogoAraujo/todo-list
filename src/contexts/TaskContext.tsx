import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from "uuid"

interface Task {
    id: string
    text: string
}

interface TaskContextProps {
    tasks: Task[]
    addTask: (text: string) => void
    removeTask: (id: string) => void
}

interface TaskProviderProps {
    children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    addTask: () => {},
    removeTask: () => {}
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (text: string) => {
        const newTask: Task = {
            id: uuidv4(),
            text: text
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{ tasks, addTask , removeTask }}>
            {children}
        </TaskContext.Provider>
    );
};
