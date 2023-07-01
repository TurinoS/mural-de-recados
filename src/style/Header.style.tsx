import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: var(--primary);
    padding: .5em 5vw .5em .5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 10px 1px var(--shadow);
    position: sticky;

    & div {
        display: flex;
        align-items: center;
    }

    & img {
        width: 94px;
    }

`
