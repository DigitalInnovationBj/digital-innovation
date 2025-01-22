import { useEffect, useState } from 'react';

const useScreen = () => {
    const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
    const [isMobile, setIsMobile] = useState(width <= 768);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleResize = () => {
            setWidth(window.innerWidth);
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);

        // Nettoyage de l'écouteur d'événements lors du démontage du composant
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { width, isMobile };
};

export default useScreen;