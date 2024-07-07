import logodark from "../public/logo-dark.svg"
import logolight from "../public/logo-light.svg"
import Image from "next/image"

interface Props {
    logotype: string
}

export default function LogoComponent({logotype}:Props) {
    
    if(logotype == "dark") {
        return(
            <Image src={logodark} alt="Company logo" className="h-[24.61px] w-[95.76px]"/>
        )
    } else {
        return(
            <Image src={logolight} alt="Company logo" className="h-[24.61px] w-[95.76px]"/>
        )
    }
}