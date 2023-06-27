import logo from '../assets/mural-de-recados.png';
import { StyledDarkIcon, StyledHeader, StyledLightIcon } from '../style/Header.style';

export default function Header() {
    return(
        <StyledHeader>
            <div>
                <img src={logo} alt="Logo" />
                <h1>Mural de Recados</h1>
            </div>
            <div>
                <label htmlFor="light-mode"><StyledLightIcon /></label>
                <input id="light-mode" name="light-mode" type="checkbox" />
                <label htmlFor="dark-mode"><StyledDarkIcon /></label>
                <input id="dark-mode" name="dark-mode" type="checkbox" />
            </div>
        </StyledHeader>
    )
}