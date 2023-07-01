import styled from "styled-components";

const StyledMessageCard = styled.div`
    display: grid;
    grid-template-areas: 
    "message message"
    "name date";
    border: 2px solid var(--font-black);
    border-radius: var(--border-radius);
    background-color: var(--font-white);
    padding: 1em;
    gap: .5em;
    max-width: 25vw;
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