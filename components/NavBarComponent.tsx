import LogoComponent from "./LogoComponent"
import Button from "./ButtonComponent"

export default function NavBar() {
    return (
        <nav>
            <LogoComponent logotype="dark"/>
            this is the navigation area 
            <Button/>
        </nav>
    )
}