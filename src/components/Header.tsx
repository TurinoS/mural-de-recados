import {  StyledHeader } from '../style/Header.style';
import logo from '../assets/mural-de-recados.png';
import ReactSwitch from 'react-switch';
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default function Header() {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return(
        <StyledHeader>
            <div>
                <img src={logo} alt="Logo" />
                <h1>Mural de Recados</h1>
            </div>
                <ReactSwitch 
                    onChange={toggleTheme} 
                    checked={theme.title === 'dark'} 
                    checkedIcon={false} 
                    uncheckedIcon={false}
                    onColor={theme.colors.fontWhite}
                    onHandleColor={theme.colors.fontBlack}
                    offColor={theme.colors.fontBlack}
                    offHandleColor={theme.colors.fontWhite}
                />
        </StyledHeader>
    )
}