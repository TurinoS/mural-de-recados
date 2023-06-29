import styled from "styled-components";

const StyledMessageCard = styled.div`
    display: grid;
    grid-template-areas: 
    "message message"
    "name date";
    border: 2px solid var(--font-black);
    padding: 1em;
    gap: .5em;

    & p {
        grid-area: message;
    }

    & h2 {
        grid-area: name;
        font-size: 16px;
    }

    & span {
        grid-area: date;
        text-align: end;
    }
`

export default function MessageCard() {
    return(
        <StyledMessageCard>
            <p>A felicidade está na jornada e não no destino. 
                Aproveite cada segundo dessa maravilhosa viagem que se chama vida.
                Seja feliz e faça as pessoas felizes, esse é o sentido da vida.
            </p>
            <h2>Paulo</h2>
            <span>29/06/2023</span>
        </StyledMessageCard>
    )
}