import LogoComponent from "./LogoComponent"
import Button from "./ButtonComponent"

export default function NavBar() {
    return (
        <nav className="flex mt-4 mx-4 items-center justify-between">
            <LogoComponent logotype="light"/>
            <Button btnText="Apply for access" btnType="secondary" btnStyling="w-4/12 h-12"/>
        </nav>
    )
}