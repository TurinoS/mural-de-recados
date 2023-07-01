import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { StyledWrapperDark, StyledWrapperLight } from "../style/Wrapper.style";

interface WrapperProps {
    children: ReactNode
}

export default function Wrapper(props: WrapperProps) {
    const { theme } = useContext(ThemeContext);

    if(theme) {return(
        <StyledWrapperLight>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </StyledWrapperLight>
    )} else { return(
        <StyledWrapperDark>
            <Header />
            <main>
                {props.children}
            </main>
            <Footer />
        </StyledWrapperDark>
    )}
}