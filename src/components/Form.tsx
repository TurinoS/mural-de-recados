import StyledForm from "../style/Form.style";
import { StyledButton } from "../style/StyledButton";
import { useState } from "react";

export default function Form() {

    const [currentMessage, setCurrentMessage] = useState('')
    const [currentName, setCurrentName] = useState('')

    function addMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(`${currentName} mandou a mensagem ${currentMessage}`);
    }

    function writeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCurrentMessage(e.target.value)
    }

    function writeName(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentName(e.target.value)
    }

    return(
        <StyledForm onSubmit={addMessage}>
            <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Seu nome..." 
                required 
                onChange={writeName}
            />
            <textarea 
                id="message"
                name="message" 
                placeholder="Sua mensagem..."
                cols={30}
                rows={5} 
                required
                onChange={writeMessage}
            />
            <StyledButton type="submit">Adicionar mensagem</StyledButton>
        </StyledForm>
    )
}