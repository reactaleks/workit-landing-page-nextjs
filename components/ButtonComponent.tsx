
interface Props {
    btnStyling:string;
    btnText:string;
}

export default function Button({btnStyling, btnText}:Props) {
    return (
        <button className={`${btnStyling}`}>{btnText}</button>
    )
}