import { InputTask } from "./InputTask"
import { ButtonTask } from "./ButtonTask"
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    align-items:center;
    justify-content: center;

    gap: 8px;
    transform:translateY(-50%);
`

export function FormTaskBar(){
    return(
        <Form>
            <InputTask  type="text" placeholder="Adicione uma nova tarefa"/>
            <ButtonTask  value="Criar"/>
        </Form>
    )
}