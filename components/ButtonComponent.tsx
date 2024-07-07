
interface Props {
    btnStyling:string;
    btnText:string;
    btnType:string;
}

export default function Button({btnStyling, btnText, btnType}:Props) {

    if(btnType === 'primary') {
        return (
            <button className={`${btnStyling} text-dark-purple font-bold hover:bg-dark-purple bg-exucalyptus  hover:border-2 hover:border-exucalyptus hover:text-exucalyptus`}>{btnText}</button>
        )
    } else {
        return (
            <button className={`${btnStyling} border border-t-0 border-x-0 border-b-exucalyptus text-ghost-white hover:text-exucalyptus`}>{btnText}</button>
        )
    }
    
}