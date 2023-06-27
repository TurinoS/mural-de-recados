import styled from "styled-components";

export const StyledButton = styled.button`
    padding: .5em 1.5em;
    background-color: var(--primary);
    color: var(--font-white);
    font-size: 20px;
    border-radius: var(--border-radius);
    border: none;
    box-shadow: 2px 2px 10px 1px var(--shadow);

    &:hover {
        background-color: var(--green);
        color: var(--font-black);
        cursor: pointer;
        transition: 350ms;
    }
`