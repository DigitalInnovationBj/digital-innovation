import { useEffect, useRef } from "react";
import Image from "next/image";
import NavLink from "./nav-link";
import ThemedButton from "./button";
import { gsap } from "gsap";

const NavigationComponent = () => {
    const navRef = useRef<HTMLDivElement | null>(null);
    const linksRef = useRef<(HTMLAnchorElement | null)[]>([]); // Type explicit

    // Animation d'entrée avec GSAP
    useEffect(() => {
        if (navRef.current) {
            gsap.fromTo(
                navRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
            );
        }

        // Animation pour chaque lien
        linksRef.current.forEach((link, index) => {
            if (link) {
                gsap.fromTo(
                    link,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: index * 0.1 }
                );
            }
        });
    }, []);

    return (
        <div
            ref={navRef}
            className="flex flex-row bg-secondary px-[160px] justify-between items-center gap-[150px]"
        >
            {/* Logo */}
            <div>
                <Image
                    src={"/svg/nav-logo.svg"}
                    width={122}
                    height={25}
                    alt="nav-logo"
                ></Image>
            </div>

            {/* Menu */}
            <div className="flex flex-row justify-between items-center gap-[20px]">
                <div className="flex flex-row items-center justify-normal gap-[20px]">
                    <NavLink href="/">acceuil</NavLink>
                    <NavLink href="/s">à propos</NavLink>
                    <NavLink href="/x">nos services</NavLink>
                    <NavLink href="/c">tarifs</NavLink>
                    <NavLink href="/q">FAQ</NavLink>
                    <NavLink href="/f">blog</NavLink>
                </div>
                {/* Bouton */}
                <div>
                    <ThemedButton type="button" variant="light" outline>
                        Contactez-nous
                    </ThemedButton>
                </div>
            </div>
        </div>
    );
};

export default NavigationComponent;
