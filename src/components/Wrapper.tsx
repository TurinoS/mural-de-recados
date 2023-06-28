import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

interface WrapperProps {
    children: ReactNode
    toggleTheme(): void
}

const StyledWrapper = styled.body`
    & main {
        padding: 5vh 7vw;
        min-height: calc(100vh - 119.28px);
        background-color: var(--secondary);
    }
`

export default function Wrapper(props: WrapperProps) {
    return(
        <StyledWrapper>
            <Header toggleTheme={props.toggleTheme}/>
            <main>
                {props.children}
            </main>
            <Footer />
        </StyledWrapper>
    )
}