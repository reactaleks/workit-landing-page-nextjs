import { ReactNode } from "react"


interface Props {
    children: ReactNode
    sectionStyling: String
}

export default function PageSection({children, sectionStyling}:Props) {
    return (
        <section className={`flex flex-col ${sectionStyling}`}>
            {children}
        </section>
    )
}