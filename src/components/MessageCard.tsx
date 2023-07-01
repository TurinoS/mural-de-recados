import StyledMessageCard from "../style/MessageCard.style";

interface MessageCardProps {
    message: string
    name: string
    date: string
}

export default function MessageCard({ message, name, date }: MessageCardProps) {
    return(
        <StyledMessageCard>
            <p>{message}</p>
            <h2>{name}</h2>
            <span>{date}</span>
        </StyledMessageCard>
    )
}