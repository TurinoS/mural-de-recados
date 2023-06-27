import styled from "styled-components";
import logo from '../assets/mural-de-recados.png';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

const StyledHeader = styled.header`
    background-color: var(--primary);
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 10px 1px var(--shadow);

    & div {
        display: flex;
        align-items: center;
        margin-right: 2em;
    }

    & img {
        width: 10%;
    }

    & h1 {
        color: var(--font-white);
    }

    & label {
        
    }

    & input {
        display: none;
    }
`

const StyledLightIcon = styled(MdOutlineLightMode)`
    color: var(--font-white);
    font-size: 30px;
    margin: 5px 1em;
`

const StyledDarkIcon = styled(MdOutlineDarkMode)`
    color: var(--font-white);
    font-size: 30px;
    margin-right: 1em;
`

export default function Header() {
    return(
        <StyledHeader>
            <div>
                <img src={logo} alt="Logo" />
                <h1>Mural de Recados</h1>
            </div>
            <div>
                <label htmlFor="light-mode"><StyledLightIcon /></label>
                <input id="light-mode" name="light-mode" type="checkbox" />
                <label htmlFor="dark-mode"><StyledDarkIcon /></label>
                <input id="dark-mode" name="dark-mode" type="checkbox" />
            </div>
        </StyledHeader>
    )
}