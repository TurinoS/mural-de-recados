import styled from "styled-components"
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

export const StyledFooter = styled.footer`
    background-color: var(--primary);
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
    box-shadow: 1px -1px 10px 1px var(--shadow);

    & span {
        color: var(--font-white);
        font-weight: 600;
    }

    & div {
        display: flex;
        gap: 1em;
    }
`

export const StyledGithubtIcon = styled(AiFillGithub)`
    font-size: 30px;
`

export const StyledLinkedinIcon = styled(AiFillLinkedin)`
    font-size: 30px;
`