import { Input, Button, Form } from "./FormTaskBar.styled"
import { TaskContext } from "../contexts/TaskContext"
import { useContext, useState } from "react"
import AddIcon from "./add-icon"

export function FormTaskBar() {
    const { addTask } = useContext(TaskContext)
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addTask(inputValue)
        setInputValue('')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Adicione uma nova tarefa"
                name="taskInput"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <Button>
                Criar
                <AddIcon />
            </Button>
        </Form>
    )
}