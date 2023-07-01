import styled from "styled-components";
import Form from "../components/Form";
import { StyledButton } from "../style/StyledButton";
import { useEffect, useState } from "react";
import MessageCard from "../components/MessageCard";

interface Messages {
    id: number
    name: string
    message: string
    date: string
}

const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    align-items: center;

    & section {
        display: flex;
        justify-content: space-between;
        gap: 1em;
        flex-wrap: wrap;
    }
`

export default function Home() {

    const [showForm, setShowForm] = useState(false);
    function openForm() {
        setShowForm(true);
    }

    const [messagesData, setMessagesData] = useState<Messages[]>()

    useEffect(() => {
        fetch('http://localhost:5000/messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(data => setMessagesData(data))
        .catch(err => console.log(err))
    }, [setMessagesData])

    return(
        <StyledHome>
            {showForm ? <Form /> : <StyledButton onClick={openForm}>Adicione uma mensagem</StyledButton>}
            <section>
                {messagesData ? messagesData.map((message) => (
                    <MessageCard key={message.id} message={message.message} name={message.name} date={message.date}/>
                )): ''}
            </section>
        </StyledHome>
    )
}