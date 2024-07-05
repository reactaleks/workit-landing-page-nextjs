import { ReactNode } from "react"


interface Props {
    children: ReactNode
}

export default function PageSection({children}:Props) {
    return (
        <section className="h-pagesection  flex flex-col w-full pt-36">
            {children}
        </section>
    )
}