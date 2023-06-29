import styled from "styled-components";
import Form from "../components/Form";
import { StyledButton } from "../components/StyledButton";
import { useState } from "react";
import MessageCard from "../components/MessageCard";

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;
`

export default function Home() {

    const [showForm, setShowForm] = useState(false);
    function openForm() {
        setShowForm(true);
    }

    return(
        <StyledHome>
            {showForm ? <Form /> : <StyledButton onClick={openForm}>Adicione uma mensagem</StyledButton>}
            <div>
                <MessageCard />
            </div>
        </StyledHome>
    )
}