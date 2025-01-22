import useScreen from "@/hooks/useScreen"
import clsx from "clsx"

interface ThemedTextProps {
    children: React.ReactNode
    className?: string
    tag?: "p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
    variant?: "heading1" | "heading2" | "heading3" | "heading4" | "heading5" | "heading6" | "paragraph" | "large" | "medium" | "regular" | "small" | "tiny" | "quote"
    color?: "primary" | "secondary" | "tertiary" | "white" | "dark" | "red" | "yellow"
    font?: "default" | "heading"
}

const Themedtext = ({ children, className, tag: Tag = 'p', variant = "large", color = "dark", font = "default" }: ThemedTextProps) => {
    const { isMobile } = useScreen()


    let variantValue = ""
    switch (variant) {
        case "heading1":
            variantValue = isMobile ? "text-m-heading-1" : "text-heading-1"
            break;
        case "heading2":
            variantValue = isMobile ? "text-m-heading-2" : "text-heading-2"
            break;
        case "heading3":
            variantValue = isMobile ? "text-m-heading-3" : "text-heading-3"
            break;
        case "heading4":
            variantValue = isMobile ? "text-m-heading-4" : "text-heading-4"
            break;
        case "heading5":
            variantValue = isMobile ? "text-m-heading-5" : "text-heading-5"
            break;
        case "heading6":
            variantValue = isMobile ? "text-m-heading-6" : "text-heading-6"
            break;
        case "paragraph":
            variantValue = isMobile ? "text-m-paragraph" : "text-paragraph"
            break;
        case "large":
            variantValue = isMobile ? "text-m-large" : "text-large"
            break;
        case "medium":
            variantValue = isMobile ? "text-m-medium" : "text-medium"
            break;
        case "small":
            variantValue = isMobile ? "text-m-small" : "text-small"
            break;
        case "tiny":
            variantValue = isMobile ? "text-m-tiny" : "text-tiny"
            break;
        case "quote":
            variantValue = isMobile ? "text-m-quote" : "text-quote"
            break;
    }

    let fontValue = ""
    switch (font) {
        case "default":
            fontValue = "font-default"
            break;
        case "heading":
            fontValue = "font-heading"
            break;
    }
    let colorValue = ""
    switch (color) {
        case "primary":
            colorValue = "text-primary"
            break;
        case "secondary":
            colorValue = "text-secondary"
            break;
        case "tertiary":
            colorValue = "text-tertiary"
            break;
        case "white":
            colorValue = "text-white"
            break;
        case "dark":
            colorValue = "text-dark"
            break;
        case "red":
            colorValue = "text-danger"
            break;
        case "yellow":
            colorValue = "text-warning"
            break;
    }

    return (
        <Tag className={clsx(variantValue, fontValue, colorValue, className)}>
            {children}
        </Tag>
    )
}

export default Themedtext