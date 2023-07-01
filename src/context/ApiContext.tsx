import { ReactNode, createContext, useEffect, useState } from "react";

interface Messages {
    id: number
    name: string
    message: string
    date: string
}

interface ApiContextProps {
    messagesData: Messages[] | undefined;
    addMessage: (e: React.FormEvent<HTMLFormElement>) => void;
    writeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    writeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    showForm: boolean;
    openForm: () => void;
}

export const ApiDataContext = createContext<ApiContextProps>({
    messagesData: undefined,
    addMessage: () => {},
    writeName: () => {},
    writeMessage: () => {},
    showForm: false,
    openForm: () => {},
});

export const ApiDataProvider = ({ children }: { children: ReactNode }) => {
    const [currentMessage, setCurrentMessage] = useState('')
    const [currentName, setCurrentName] = useState('')

    function writeMessage(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setCurrentMessage(e.target.value)
    }

    function writeName(e: React.ChangeEvent<HTMLInputElement>) {
        setCurrentName(e.target.value)
    }

    const [showForm, setShowForm] = useState(false);
    function openForm() {
        setShowForm(true);
    }

    function addMessage(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const data = new Date();
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();
        const formatedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;

        const newMessage = {
            name: currentName,
            message: currentMessage,
            date: formatedDate
        }

        fetch('http://localhost:5000/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMessage),
        })
        setShowForm(false);
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
    }, [messagesData])

    if(messagesData) {
        return(<ApiDataContext.Provider value={{ messagesData, addMessage, writeName, writeMessage, showForm, openForm }}>{children}</ApiDataContext.Provider>)
    } else {
        return(null)
    }
}