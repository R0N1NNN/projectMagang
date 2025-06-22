// src/utils/WidgetManager.jsx
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const specialRoutes = ['/login', '/verify', '/admin'];

const WidgetManager = () => {
    const location = useLocation();
    const prevPath = useRef(location.pathname);

    useEffect(() => {
        const current = location.pathname;
        const previous = prevPath.current;

        const isSpecial = (path) => specialRoutes.includes(path);

        const movedBetweenSpecialAndNon = isSpecial(current) !== isSpecial(previous);

        if (movedBetweenSpecialAndNon) {
            window.location.reload(); // Reload jika pindah ke/dari halaman khusus
        }
        // Update previous path
        prevPath.current = current;
    }, [location]);

    return null;
};

export default WidgetManager;
