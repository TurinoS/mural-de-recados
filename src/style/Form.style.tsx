import styled from "styled-components";

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    width: 50vw;
    gap: 1em;
    width: 80vw;
    position: relative;

    & div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    & input {
        height: 43px;
    }

    & input, textarea {
        padding: .5em 1.5em;
        background-color: var(--green);
        color: var(--font-white);
        font-size: 20px;
        border-radius: var(--border-radius);
        border: none;
        box-shadow: 2px 2px 10px 1px var(--shadow);

        &::placeholder {
            color: var(--font-white);
        }
    }

    & button {
        align-self: flex-end;
    }

    @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;

        & input {
            max-width: 300px;
        }
    }
`

export default StyledForm