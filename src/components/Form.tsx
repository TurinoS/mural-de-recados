import StyledForm from "../style/Form.style";
import { StyledButton } from "../style/StyledButton";
import { useState } from "react";

export default function Form() {

    const [currentMessage, setCurrentMessage] = useState('')
    const [currentName, setCurrentName] = useState('')

    function addMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = new Date();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        const formatedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

        let newMessage = {
            message: currentMessage,
            name: currentName,
            date: formatedDate
        }

        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
        })
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