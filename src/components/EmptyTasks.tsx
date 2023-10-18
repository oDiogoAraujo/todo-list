import styled from "styled-components";
import { ClipboardIcon } from "./clipboard-icon";

const Container = styled.div `
    display:flex;
    align-items:center;
    flex-direction:column;

    margin-top: 64px;
`

export function EmptyTasks() {
    return (
        <Container>
            <ClipboardIcon />
            <p><b> Você ainda não tem tarefas cadastradas</b>
            Crie tarefas e organize seus itens a fazer</p>
        </Container>
    )
}