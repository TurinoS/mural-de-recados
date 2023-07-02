import { useContext } from "react";
import StyledMessageCard from "../style/MessageCard.style";
import { BsFillTrashFill } from "react-icons/bs";
import { ApiDataContext } from "../context/ApiContext";

interface MessageCardProps {
    message: string
    name: string
    date: string
    id: number
}

export default function MessageCard({ message, name, date, id }: MessageCardProps) {
    const { deleteMessage } = useContext(ApiDataContext);

    return(
        <StyledMessageCard>
            <p>{message}</p>
            <h2>{name}</h2>
            <span>{date}</span>
            <button onClick={() => deleteMessage(id)}><BsFillTrashFill /></button>
        </StyledMessageCard>
    )
}