import { Input, Button, Form } from "./FormTaskBar.styled";
import { TaskContext } from "../contexts/TaskContext";
import { useContext } from "react";
import AddIcon from "./add-icon"

export function FormTaskBar() {
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const taskInputField = event.currentTarget.elements.namedItem('taskInput')
        const text = (taskInputField as HTMLInputElement).value
        addTask(text)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input type="text" placeholder="Adicione uma nova tarefa" name="taskInput" />
            <Button>
                Criar
                <AddIcon />
            </Button>
        </Form>
    )
}