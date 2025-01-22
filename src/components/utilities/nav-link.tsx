import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
    href: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
    ({ children, href, className, ...props }, ref) => {
        const router = useRouter();
        const path = router.pathname;

        return (
            <Link href={href} ref={ref} className={clsx(
                "transition duration-300 ease-in-out text-m-regular font-default hover:text-white capitalize",
                path === href ? "text-white" : "text-[#BBBBCB]",
                className
            )} {...props}>
                {children}
            </Link>
        );
    }
);

export default NavLink;