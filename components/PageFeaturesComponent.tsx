
interface Props {
    featurenumber:number;
    featuretitle:string;
    featuredescription:string;
}

export default function PageFeatures({featurenumber, featuretitle, featuredescription}:Props) {
    return (
        <div>
            <div>
                {featurenumber}
            </div>
            <div>
                {featuretitle}
            </div>
            <div>
                {featuredescription}
            </div>
        </div>
    )
}