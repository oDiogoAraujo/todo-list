import { InputTask } from "./InputTask"
import { ButtonTask } from "./ButtonTask"
import styled from "styled-components"
import { TaskContext } from "../contexts/TaskContext";
import { useContext } from "react";

const Form = styled.form`
    display: flex;
    align-items:center;
    justify-content: center;

    gap: 8px;
    transform:translateY(-50%);
`

export function FormTaskBar() {
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const text = (event.currentTarget.elements.namedItem('taskInput') as HTMLInputElement).value;
        addTask(text);
    }
    
    return (
        <Form onSubmit={handleSubmit}>
            <InputTask type="text" placeholder="Adicione uma nova tarefa" />
            <ButtonTask value="Criar" />
        </Form>
    )
}