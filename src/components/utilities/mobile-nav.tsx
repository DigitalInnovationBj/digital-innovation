'use-client'

import { LuAlignJustify } from "react-icons/lu"
import MobileMenu from "./mobile"
import Image from "next/image"
import { useState } from "react";

const MobileNavigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <div className="relative">
                <div className="flex flex-row items-center justify-between px-5 bg-secondary">
                    <Image src="/svg/nav-logo.svg" alt="logo" width={150} height={50}></Image>
                    <LuAlignJustify size={30}
                        onClick={() => setMenuOpen(true)}
                        aria-label="Open Menu"
                        className="cursor-pointer text-white"
                    />
                </div>
                {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
            </div>
        </>
    )
}

export default MobileNavigation