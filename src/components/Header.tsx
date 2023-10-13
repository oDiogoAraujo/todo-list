import styled from "styled-components"
import RocketIcon from "./rocket-icon"

const HeaderStyled = styled.header`
    height: 22vh;
    
    display:flex;
    align-items:center;
    justify-content: center;
    


    background-color: var(--gray-700);
    gap: 12px;
`

const Logo = styled.h1`
    display: inline-block;
    font-size: 40px;
    font-weight: 900;
    
    //Cor sendo passada pelo nome da variavel CSS
    color: var(${props => props.color});

`

export function Header() {
    return (
        <HeaderStyled>
            <RocketIcon />
            <span>
                <Logo color="--blue">to</Logo>
                <Logo color="--purple-dark">do</Logo>
            </span>
        </HeaderStyled>
    )
}