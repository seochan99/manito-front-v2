import { Logo, NavBarWrapper } from "./style";
import LogoImage from "../../assets/images/logo.png"

export default function NavBar(){
    return(
        <NavBarWrapper>
            <Logo src={LogoImage} alt="logo" />
            모마
        </NavBarWrapper>
    )
}