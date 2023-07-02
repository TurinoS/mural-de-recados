import styled from "styled-components";

const StyledMessageCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 130px;
    grid-template-areas: 
        "name date"
        "message icon";
    border: 2px solid var(--font-black);
    border-radius: var(--border-radius);
    background-color: var(--font-white);
    padding: 1.5em;
    gap: .5em;
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

    & button {
        grid-area: icon;
        font-size: 16px;
        background-color: var(--green);
        border: 1px solid var(--secondary);
        border-radius: 8px;
        text-align: center;
        padding: .3em .3em .1em;
        width: fit-content;
        align-self: flex-end;
        justify-self: flex-end;

        &:hover {
            cursor: pointer;
            box-shadow: 1px 1px 5px 1px var(--shadow);
            transition: 500ms;
        }
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr 85px;
        grid-template-areas: 
            "name date"
            "message message";

        & button {
            display: none;
        }
    }
`

export default StyledMessageCard;