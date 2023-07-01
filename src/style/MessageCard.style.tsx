import styled from "styled-components";

const StyledMessageCard = styled.div`
    display: grid;
    grid-template-areas: 
    "name date"
    "message message";
    border: 2px solid var(--font-black);
    border-radius: var(--border-radius);
    background-color: var(--font-white);
    padding: 1.5em;
    gap: .8em;
    width: 100%;
    box-shadow: 3px 3px 6px 3px var(--shadow);

    & p {
        grid-area: message;
        color: var(--primary);
    }

    & h2 {
        grid-area: name;
        font-size: 16px;
        color: var(--secondary);
    }

    & span {
        grid-area: date;
        text-align: end;
        color: var(--secondary);
    }
`

export default StyledMessageCard;