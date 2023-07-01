import { ApiDataContext } from "../context/ApiContext";
import StyledForm from "../style/Form.style";
import { StyledButton } from "../style/StyledButton";
import { useContext } from "react";

export default function Form() {

    const { addMessage, writeName, writeMessage } = useContext(ApiDataContext)

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