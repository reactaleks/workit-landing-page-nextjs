import Image from "next/image"
import instaicon from "/public/icon-instagram.svg"
import facebookicon from "../public/icon-facebook.svg"
import twittericon from "../public/icon-twitter.svg"

export default function SocialLinks() {
    return (
        <div className="flex w-full justify-around">
            <Image src={instaicon} alt="Instagram social icon"/>
            <Image src={facebookicon} alt="Instagram social icon"/>
            <Image src={twittericon} alt="Twitter social icon"/>
        </div>
    )
}