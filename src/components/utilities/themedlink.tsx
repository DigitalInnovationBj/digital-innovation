import clsx from "clsx"
import Link from "next/link"
import Themedtext from "./themedText"
interface ThemedLinkProps{
    children : React.ReactNode
    href : string
    variant?: "default" | "gray" | "blue"
    className?: string
}
const ThemedLink = ({
children,
href,
variant="default",
className
}: ThemedLinkProps)=>{
    let colorVariants = {
        default: "text-dark hover:text-gray-700",
        gray: "text-gray-500 hover:text-gray-600",
        blue: "text-blue-500 hover:text-blue-600",
    }
    return (
        <>
            <Link href={href} className={clsx("transition duration-300 ease-in-out text-m-regular font-heading", colorVariants[variant], className)}>
            <p>{children}</p>
            </Link>
        </>
    )
}

export default ThemedLink