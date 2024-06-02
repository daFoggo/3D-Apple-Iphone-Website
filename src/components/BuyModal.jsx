import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { deviceImg, iphoneForYouImg } from '../utils';
import { deviceInfo } from '../constants';
import { storageInfo } from '../constants';

const BuyModal = ({ isOpen, handleSetIsModalOpen }) => {
    const [selectedDevice, setSelectedDevice] = useState(1);
    const [selectedColor, setSelectedColor] = useState("#bbb5a9");
    const [selectedStorage, setSelectedStorage] = useState(1);


    useEffect(() => {
        if (isOpen) {
            gsap.to("#buyModal", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
            });
            
            gsap.to(".modal-items", {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.5,
            })

            gsap.to("#backdrop", {
                opacity: 0.5,
                duration: 1,
                ease: "power2.inOut",
            });
        } else {
            gsap.to("#buyModal", {
                y: '100%',
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
            });

            gsap.to(".modal-items", {
                y: '100%',
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
                stagger: 0.5,
            })

            gsap.to("#backdrop", {
                opacity: 0,
                duration: 1,
                ease: "power3.inOut",
            });
        }
    }, [isOpen]);

    const handleClick = (deviceId) => {
        setSelectedDevice(deviceId);
    };
    const handleColor = (color) => {
        setSelectedColor(color);
    }

    return (
        <div className={`fixed inset-0 z-50 flex items-end justify-center ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            <div id="backdrop" className="absolute inset-0 bg-black opacity-0" onClick={handleSetIsModalOpen}></div>
            <div id="buyModal" className="relative bg-white w-full h-full sm:w-[75%] sm:h-[95vh] text-[#1d1d1f] p-5 transform translate-y-full rounded-t-3xl overflow-scroll">
                <div className="flex items-center justify-end p-5 mb-10">
                    <div className='cursor-pointer' onClick={handleSetIsModalOpen}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
                <div className='modal-items flex flex-col justify-between sm:px-20'>
                    <div>
                        <h1 className='text-4xl font-bold mb-5'>
                            Buy iPhone 15 Pro
                        </h1>
                        <p className='text-sm'>From $199/month or $999</p>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-center items-start mt-5'>
                        <div className="flex flex-col device-img sm:w-full sm:h-full bg-cover">
                            <img src={deviceImg} alt="iPhone" className='rounded-xl' />
                        </div>
                        <div className="device-info flex flex-col gap-12 sm:gap-48 p-5 sm:max-h-[40vh] sm:overflow-scroll">
                            <div id="choose-size">
                                <h1 className='text-2xl font-bold'>Which size is best for you?</h1>
                                <div className='my-5 flex flex-col gap-5'>
                                    {deviceInfo.map((device) => (
                                        <div
                                            key={device.id}
                                            className={`border rounded-lg p-5 flex justify-between cursor-pointer ${selectedDevice === device.id ? 'border-[#0071e3] border-2' : 'border-[#1d1d1f]'}`}
                                            onClick={() => handleClick(device.id)}
                                        >
                                            <div>
                                                <h2 className='text-xl font-bold'>{device.name}</h2>
                                                <p className='text-sm'>{device.size}</p>
                                            </div>
                                            <p className='text-sm w-1/3'>{device.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div id="choose-color">
                                <h1 className='text-2xl font-bold'>Next. Choose your color</h1>
                                {deviceInfo.map(device => {
                                    if (selectedDevice === device.id) {
                                        return (
                                            <div className='my-5'>
                                                <p className='text-sm font-bold' >Color - {
                                                    selectedColor === "#bbb5a9" ? "Natural Titanium" :
                                                        selectedColor === "#4a5261" ? "Blue Titanium" :
                                                            selectedColor === "#f3f2ed" ? "White Titanium" :
                                                                selectedColor === "#525455" ? "Black Titanium" : ""
                                                }</p>
                                                <div key={device.id} className='flex gap-5 my-5'>
                                                    {device.color.map((color, index) => (
                                                        <div
                                                            key={index}
                                                            className={`rounded-full w-10 h-10 cursor-pointer ${selectedColor === color ? 'border-[#0071e3] border-2' : 'border-[#1d1d1f]'} `}
                                                            style={{ backgroundColor: color }}
                                                            onClick={() => handleColor(color)}
                                                        ></div>
                                                    ))}
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            <div id="choose-storage">
                                <h1 className='text-2xl font-bold'>How much storage you need?</h1>
                                <div className='my-5 flex flex-col gap-5'>
                                    {storageInfo.map((storage) => (
                                        <div
                                            key={storage.id}
                                            className={`border rounded-lg p-5 flex justify-between cursor-pointer ${selectedStorage === storage.id ? 'border-[#0071e3] border-2' : 'border-[#1d1d1f]'}`}
                                            onClick={() => setSelectedStorage(storage.id)}
                                        >
                                            <div>
                                                <h2 className='text-xl font-bold'>{storage.size}</h2>
                                            </div>
                                            <p className='text-sm w-1/3'>{storage.price}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 sm:flex-row sm:justify-around mt-5 sm:bg-[#f5f5f7] rounded-xl sm:pt-10 sm:px-10'>
                        <div className='flex flex-col gap-10 bg-[#f5f5f7] rounded-xl pt-10 px-10'>
                            <div>
                                <h1 className='text-[#1d1d1f] text-2xl sm:text-3xl font-bold'>
                                    Your new iPhone awaits.
                                </h1>
                                <h1 className='text-[#86868b] text-1xl sm:text-2xl font-bold'>Make it yours.</h1>
                            </div>
                            <div className='w-1/2 '>
                                <img src={iphoneForYouImg} alt="" className='' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-10 bg-[#f5f5f7] rounded-xl p-10'>
                            <div>
                                <div className='flex gap-3 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                                    </svg>
                                    <h1>Free shipping</h1>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart-fill" viewBox="0 0 16 16">
                                        <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                    </svg>
                                    <h1>
                                        Pick up from store
                                    </h1>
                                </div>
                            </div>
                            <div>
                                <button className='bg-blue px-20 py-3 rounded-xl text-white'>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyModal;
