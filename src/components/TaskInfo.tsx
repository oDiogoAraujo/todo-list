import styled from "styled-components"
import { TaskContext } from "../contexts/TaskContext"
import { useContext } from "react"

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`

const StyledTitle = styled.h4`
    font-size: 14px;
    font-weight: 700;

    color: var(${props => props.color});
    display: inline-block;

    margin-right: 8px;
`
const Counter = styled.span`
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 999px;
    font-weight: 700;
    background-color: var(--gray-400);
`

export function TaskInfo() {
    const { tasks } = useContext(TaskContext)
    return (
        <Container>
            <span>
                <StyledTitle color="--blue">Tarefas Criadas</StyledTitle>
                <Counter>{tasks.length}</Counter>
            </span>

            <span>
                <StyledTitle color="--purple">Concluídas</StyledTitle>
                <Counter>0</Counter>
            </span>
        </Container>
    )
}