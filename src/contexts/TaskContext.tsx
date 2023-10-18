import React, { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from "uuid"
import { useLocalStorage } from '../hooks/useLocalStorage'

interface Task {
    id: string
    text: string
    isCompleted: boolean
}

interface TaskContextProps {
    tasks: Task[]
    addTask: (text: string) => void
    removeTask: (id: string) => void
    completeTask: (id: string) => void;
}

interface TaskProviderProps {
    children: React.ReactNode;
}

export const TaskContext = createContext<TaskContextProps>({
    tasks: [],
    addTask: () => { },
    removeTask: () => { },
    completeTask: () => { }
});

export const TaskProvider = ({ children }: TaskProviderProps) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const { getItem, setItem } = useLocalStorage('task')

    useEffect(() => {
        setTasks(getItem())
    }, [])

    const addTask = (text: string) => {
        const newTask: Task = {
            id: uuidv4(),
            text: text,
            isCompleted: false
        };
        setTasks([...tasks, newTask]);
        setItem([...tasks, newTask])
    };

    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
        setItem(tasks.filter(task => task.id !== id))

    }

    const completeTask = (id: string) => {
        const refreshTasks = tasks.map(task => {
            if (id === task.id) task.isCompleted = !task.isCompleted
            return task
        })
        setTasks(refreshTasks)
        setItem(refreshTasks)
    }


    return (
        <TaskContext.Provider value={{ tasks, addTask, removeTask, completeTask }}>
            {children}
        </TaskContext.Provider>
    );
};
