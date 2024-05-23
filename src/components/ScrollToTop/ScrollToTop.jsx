import { useState, useEffect } from 'react';
import './ScrollToTop.css';

import ArrowUpIcon from '../../assets/svg/arrow-up.svg';

export const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const checkScrollTop = () => {
            if (!showButton && window.scrollY > 100) {
                setShowButton(true);
            } else if (showButton && window.scrollY <= 100) {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [showButton]);


    const handleClick = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <button className={`scroll-top ${showButton ? 'scroll-top--visible' : 'scroll-top--hidden'}`} onClick={handleClick}><img src={ArrowUpIcon} alt="Arrow Up" aria-label='button to top' /></button>
    )
}
