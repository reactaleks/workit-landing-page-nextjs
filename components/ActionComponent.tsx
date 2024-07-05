import Image from "next/image"
import founderImage from "../public/image-founder.webp"
import Button from "./ButtonComponent"

export default function ActionComponent() {
    return (
        <div className="flex flex-col ">
            <div className="relative overflow-hidden h-64 flex w-full justify-center">
                <Image src={founderImage} height={250} width={250} alt="Image of the company founder" className="top-12 absolute"/>
            </div>
            <div className="bg-dark-purple px-6 pb-8 text-ghost-white text-center w-call-to-action h-call-to-action mx-auto flex flex-col justify-center">
                <div>
                    <h3 className="text-feature-heading font-semibold font-fraunces mt-8">Be the first to test</h3>
                </div>
                <div className="mt-5">
                    <p className="text-feature-description text-ghost-white font-manrope leading-7">Hi, I'm Louis Graham, the founder of the company. Book a demo call with me to become a beta tester for our app and kickstart your company. Apply for access below and I’ll be in touch to schedule a call.</p>
                </div>
                <div className="mt-8">
                    <Button btnText="Apply for access" btnType="primary" btnStyling="h-call-to-action-btn w-call-to-action-btn"/>
                </div>
            </div>
        </div>
       
    )
}