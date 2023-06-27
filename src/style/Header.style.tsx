import styled from "styled-components"
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

export const StyledHeader = styled.header`
    background-color: var(--primary);
    padding: .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 10px 1px var(--shadow);
    position: sticky;

    & div {
        display: flex;
        align-items: center;
        margin-right: 2em;
    }

    & img {
        width: 94px;
    }

    & h1 {
        color: var(--font-white);
    }

    & input {
        display: none;
    }
`

export const StyledLightIcon = styled(MdOutlineLightMode)`
    color: var(--font-white);
    font-size: 30px;
    margin: 5px 1em;
`

export const StyledDarkIcon = styled(MdOutlineDarkMode)`
    color: var(--font-white);
    font-size: 30px;
    margin-right: 1em;
`