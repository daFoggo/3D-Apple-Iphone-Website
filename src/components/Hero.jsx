import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import BuyModal from './BuyModal';

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleSetIsModalOpen = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    };

    const handleSetVideoSrc = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleSetVideoSrc);

        return () => {
            window.removeEventListener('resize', handleSetVideoSrc);
        };
    }, []);

    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 2,
            ease: "power2.inOut",
            duration: 1,
        });
    }, []);

    useGSAP(() => {
        gsap.to('#cta', {
            opacity: 1,
            y: -50,
            delay: 2,
            ease: "power2.inOut",
            duration: 1,
        });
    }, []);

    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title">iPhone 15 Pro</p>
                <div className='md:w-10/12 w-9/12'>
                    <video autoPlay muted playsInline key={videoSrc} className='pointer-events-none'>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className='flex flex-col items-center opacity-0 translate-y-20' id="cta">
                <a href="" className='btn' onClick={handleSetIsModalOpen}>Buy</a>
                <p className='font-normal text-xl'>From $199/month or $999</p>
            </div>
            <BuyModal isOpen={isModalOpen} handleSetIsModalOpen={handleSetIsModalOpen} />
        </section>
    );
};

export default Hero;
