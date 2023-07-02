import styled from "styled-components";
import Form from "../components/Form";
import { StyledButton } from "../style/StyledButton";
import MessageCard from "../components/MessageCard";
import { ApiDataContext } from "../context/ApiContext";
import { useContext } from "react";

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;

    & section {
        display: flex;
        width: 100%;
        flex-direction: column-reverse;
        gap: 1em;
    }
`

export default function Home() { 

    const { messagesData, showForm, openForm } = useContext(ApiDataContext);

    return(
        <StyledHome>
            {showForm ? <Form /> : <StyledButton onClick={openForm}>Adicione uma mensagem</StyledButton>}
            <section>
                {messagesData ? messagesData.map((message) => (
                    <MessageCard id={message.id} key={message.id} message={message.message} name={message.name} date={message.date}/>
                )): ''}
            </section>
        </StyledHome>
    )
}