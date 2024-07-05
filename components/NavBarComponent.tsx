import LogoComponent from "./LogoComponent"
import Button from "./ButtonComponent"

export default function NavBar() {
    return (
        <nav className="flex">
            <LogoComponent logotype="light"/>
            this is the navigation area 
            <Button btnStyling="border border-t-0 border-x-0 border-b-exucalyptus text-ghost-white"/>
        </nav>
    )
}