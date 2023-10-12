import styled from "styled-components"
import AddIcon from "../AddIcon"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
}

const Button = styled.button`
    width: 90px;
    height: 52px;
    padding: 16px;

    background-color: var(--blue-dark);
    color: #FFFFFF;

    border: none;
    border-radius: 8px;

    font-weight: 700;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export function ButtonTask({ value }: ButtonProps) {
    return (
        <>
            <Button type="submit">
                {value}
                <AddIcon/>
            </Button>
        </>
    )
}
