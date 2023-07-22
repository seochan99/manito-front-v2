import { Logo, NavBarWrapper } from "./style";
import LogoImage from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <NavBarWrapper>
            <Link to="/">
            <Logo src={LogoImage} alt="logo" />
            </Link>
        </NavBarWrapper>
    )
}