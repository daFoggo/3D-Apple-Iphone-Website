import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const MobileNavBar = ({ isOpen, navLists, handleSetIsMenuOpen }) => {
    const handleMouseEnter = (index) => {
        gsap.to(`#arrow-${index}`, {
            x: 10,
            duration: 0.3,
            ease: "power2.inOut",
        });
    };

    const handleMouseLeave = (index) => {
        gsap.to(`#arrow-${index}`, {
            x: 0,
            duration: 0.3,
            ease: "power2.inOut",
        });
    };

    useEffect(() => {
        if (isOpen) {
            gsap.to("#mobileMenu", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
            });
            gsap.to(".nav-item", {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
                stagger: 0.1,
            })
        } else {
            gsap.to("#mobileMenu", {
                y: '-100%',
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
            });
            gsap.to(".nav-item", {
                y: -10,
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
                stagger: 0.1,
            })
        }
    }, [isOpen]);

    return (
        <div id="mobileMenu" className="fixed top-0 left-0 w-full h-full bg-black text-white transform -translate-y-full sm:hidden z-50">
            <div className="flex items-center justify-end p-5">
                <div className='cursor-pointer self-end' onClick={handleSetIsMenuOpen}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <div className="flex flex-col p-5">
                {navLists.map((nav, index) => (
                    <div
                        key={index}
                        className='nav-item py-2 text-3xl font-semibold cursor-pointer hover:text-[#b0b0b0] flex justify-between items-center'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        {nav}
                        <svg
                            id={`arrow-${index}`}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-right"
                            viewBox="0 0 16 16"
                        >
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                        </svg>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MobileNavBar;
