import { appleImg, searchImg, bagImg } from '../utils'
import { navLists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const NavBar = () => {

    useGSAP(() => {
        gsap.to("#navBar", {
            y: 0,
            opacity: 1,
            delay: 2,
            duration: 1,
            ease: "power2.inOut",
        })
    }, [])

    return (
        <>
            <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center -translate-y-20 opacity-0' id="navBar">
                <nav className='flex w-full screen-max-width'>
                    <img src={appleImg} alt="Apple" width={14} height={18} />

                    <div className='flex flex-1 justify-center max-sm:hidden'>
                        {navLists.map((nav, index) => {
                            return (
                                <div key={index} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                                    {nav}
                                </div>
                            )
                        })}
                    </div>

                    <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                        <img src={searchImg} alt="search" width={18} height={18} />
                        <img src={bagImg} alt="bag" width={18} height={18} />
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar