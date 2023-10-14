import styled from "styled-components"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    type: string;
}

const Input = styled.input`
    flex: 1;
    padding: 16px;

    border: 1px solid var(--gray-700);
    border-radius: 8px;

    background-color: var(--gray-500);
    font-size: 16px;
`

export function InputTask({ placeholder, type }: InputProps) {
    return (
        <Input type={type} placeholder={placeholder} name="taskInput"/>
    )
}