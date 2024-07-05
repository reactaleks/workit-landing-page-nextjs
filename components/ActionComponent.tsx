import Image from "next/image"
import founderImage from "../public/image-founder.webp"
import Button from "./ButtonComponent"

export default function CallActionComponent() {
    return (
        <div>
            <div>
                <Image src={founderImage} height={250} width={250} alt="Image of the company founder"/>
            </div>
            <div>
                <div>
                    Be the first to test
                </div>
                <div>
                    <p>Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
                </div>
                <div>
                    <Button/>
                </div>
            </div>
        </div>
       
    )
}