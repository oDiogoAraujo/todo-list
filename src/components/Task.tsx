import styled from "styled-components"
import { TrashIcon } from "./trash-icon"
import { useContext } from "react"
import { TaskContext } from "../contexts/TaskContext"

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between ;
    
    padding: 16px;
    margin: 12px 0;

    border: 1 solid var(--gray-500);
    box-shadow: 0px 2px 8px 0px #0000000F;
    border-radius: 8px;

    background-color: var(--gray-500);
`

const Text = styled.p`
    margin: 0 12px;
    font-size: 14px;
    flex: 1;
`

const TrashButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
`

interface TaskProps {
    id: string
    text: string
}

export function Task({ id, text }: TaskProps) {
    const { removeTask } = useContext(TaskContext)

    const handleRemoveTask = () => {
        removeTask(id)
    }

    return (
        <Container id={id}>
            <input type="checkbox" name="" id="" />
            <Text>{text}</Text>
            <TrashButton onClick={handleRemoveTask}>
                <TrashIcon />
            </TrashButton>
        </Container>
    )
}
