import { useEffect, useState } from "react";
import MobileNavigation from "./mobile-nav";
import NavigationComponent from "./navigation";
import useScreen from "@/hooks/useScreen";

const NavigationBar = () => {
    const {width} = useScreen()
    return (
        <div>
            {width <= 1200 && <MobileNavigation/>}
            {width > 1200 && <NavigationComponent/>}
        </div>
    )
}

export default NavigationBar