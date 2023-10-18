// import { useEffect, useState } from "react";






// interface Task {
//     id: string
//     text: string
//     isCompleted: boolean
// }

export function useLocalStorage(key: string) {
    const setItem = (value: unknown) => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    const getItem = () => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : []
    }

    return { setItem , getItem}
}