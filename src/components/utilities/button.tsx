import clsx from "clsx"
import { IconType } from "react-icons"
import React from 'react';

interface ThemedButtonProps {
    children: React.ReactNode
    icon?:IconType
    type? : "submit" | "button"
    variant?: "primary" | "secondary" | "danger" | "success" | "warning" | "info" | "light" | "dark"
    size?: "small"|"medium"| "large"
    outline?: boolean
    onClick?: () => void
    iconPosition?: "start" | "end"
    ref?: React.Ref<HTMLButtonElement>
    className?: string
}
const ThemedButton = React.forwardRef<HTMLButtonElement, ThemedButtonProps>(({
    children,
    icon: Icon,
    type = "button",
    variant = "primary",
    size = 'medium',
    onClick,
    iconPosition = "end",
    outline = false,
    className
}, ref) => {
    const sizes = {
        small: "text-m-regular px-[18px] py-[8px]",
        medium: "text-m-medium px-[30px] py-[10px]",
        large: "text-m-quote px-[30px] py-[15px]",
    }
    const variants = {
        primary:outline? "text-primary border border-primary bg-transparent": "bg-primary text-light",
        secondary: outline ? "text-secondary border border-secondary bg-transparent":"bg-secondary text-light",
        danger: outline ? "text-danger border border-danger bg-transparent":"bg-danger text-light",
        success:outline ? "text-green-500 border border-green-500 bg-transparent": "bg-green-500 text-light",
        warning:outline ? "text-warning border border-warning bg-transparent": "bg-warning text-light",
        info:outline ? "text-green-500 border border-green-500 bg-transparent": "bg-green-500 text-light",
        light: outline ? "text-white border border-white bg-transparent": "bg-white text-dark",
        dark: outline ? "text-dark border border-dark bg-transparent": "bg-dark text-white",
    }
    return (
        <button
        ref={ref}
        type={type}
        className={clsx(
            "flex flex-row items-center justify-center gap-2 transition hover:opacity-70 duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed rounded-[40px]",
            sizes[size],
            variants[variant],
            outline ? "outline" : "",
            className
        )}
        onClick={onClick}
        >
            {Icon && iconPosition === "start" && <Icon />}
            {children}
            {Icon && iconPosition === "end" && <Icon />}
        </button>
    )
});

export default ThemedButton