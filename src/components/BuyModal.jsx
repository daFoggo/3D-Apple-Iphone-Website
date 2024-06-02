import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { deviceImg } from '../utils';
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
                <div className='flex flex-col justify-between sm:px-20'>
                    <div>
                        <h1 className='text-4xl font-bold mb-5'>
                            Buy iPhone 15 Pro
                        </h1>
                        <p className='text-sm'>From $199/month or $999</p>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-center'>
                        <div className="flex flex-col device-img sm:w-2/3 sm:h-2/3 bg-cover">
                            <img src={deviceImg} alt="iPhone" className='rounded-xl mt-5' />
                        </div>
                        <div className="device-info flex flex-col gap-12 sm:gap-48 p-5 sm:h-[50vh] sm:overflow-scroll">
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
                </div>
            </div>
        </div>
    );
};

export default BuyModal;
