import {  StyledHeader } from '../style/Header.style';
import logo from '../assets/mural-de-recados.png';
import ReactSwitch from 'react-switch';
import { useContext } from 'react'
import { ThemeContext } from 'styled-components';

interface HeaderProps {
    toggleTheme(): void
}

export default function Header( props: HeaderProps ) {

    const { colors, title } = useContext(ThemeContext)

    return(
        <StyledHeader>
            <div>
                <img src={logo} alt="Logo" />
                <h1>Mural de Recados</h1>
            </div>
                <ReactSwitch 
                    onChange={props.toggleTheme} 
                    checked={title === 'dark'} 
                    checkedIcon={false} 
                    uncheckedIcon={false}
                    onColor={colors.fontWhite}
                    onHandleColor={colors.fontBlack}
                    offColor={colors.fontBlack}
                    offHandleColor={colors.fontWhite}
                />
        </StyledHeader>
    )
}