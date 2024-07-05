import LogoComponent from "./LogoComponent"
import Button from "./ButtonComponent"

export default function NavBar() {
    return (
        <nav className="flex mt-4 mx-4 items-center">
            <LogoComponent logotype="light"/>
            this is the navigation area 
            <Button btnText="Apply for access" btnStyling="border border-t-0 w-8/12 h-12 border-x-0 border-b-exucalyptus text-ghost-white"/>
        </nav>
    )
}