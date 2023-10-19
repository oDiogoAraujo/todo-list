import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    align-items:center;
    justify-content: center;
    color: #FFFFFF;

    gap: 8px;
    transform:translateY(-50%);
    flex-wrap:wrap;
    min-width: 250;
`

export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90px;
    height: 52px;
    padding: 16px;

    background-color: var(--blue-dark);
    color: #FFFFFF;

    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
`

export const Input = styled.input`
    flex: 1 1 200px;
    padding: 16px;

    border: 1px solid var(--gray-700);
    border-radius: 8px;

    background-color: var(--gray-500);
    font-size: 16px;
    /* min-width: 250px */
`