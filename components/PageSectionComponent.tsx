import { ReactNode } from "react"


interface Props {
    children: ReactNode
}

export default function PageSection({children}:Props) {
    return (
        <section>
            {children}
        </section>
    )
}