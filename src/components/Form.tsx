import styled from "styled-components";
import { StyledButton } from "./StyledButton";
import { useState } from "react";

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 2fr;
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
`



export default function Form() {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')

    function addMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(`${name} mandou a mensagem ${message}`)
    }

    function writeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setMessage(e.target.value)
    }

    function writeName(e: React.ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }

    return(
        <StyledForm onSubmit={addMessage}>
            <div>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Seu nome..." 
                    required 
                    onChange={writeName}
                />
                <StyledButton type="submit">Adicionar mensagem</StyledButton>
            </div>
            <textarea 
                id="message"
                name="message" 
                placeholder="Sua mensagem..."
                cols={30}
                rows={5} 
                required
                onChange={writeMessage}
            />
        </StyledForm>
    )
}