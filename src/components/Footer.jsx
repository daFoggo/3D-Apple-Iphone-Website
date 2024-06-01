import { footerLinks } from '../constants'
const Footer = () => {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray text-xs">
                        More ways to shop:
                        <span className="underline text-blue">
                            {' '} Find an Apple Store {' '}
                        </span>
                        or {' '}
                        <span className="underline text-blue">
                            other retailer
                        </span>{' '}
                        near you
                    </p>
                    <p className="font-semibold text-gray text-xs">
                        Or call 000800-040-1966
                    </p>
                </div>

                <div className="bg-neutral-700 my-5 h-[1px] w-full" />

                <div class="flex flex-col items-center justify-between">
                    <p class="font-semibold text-gray text-xs mb-2">Copyright @ 2024 Apple Inc. All rights reversed</p>
                    <div class="flex flex-wrap">
                        {footerLinks.map((link, index) => (
                            <p key={link} class='font-semibold text-gray text-xs mb-2'>
                                {link}{' '}
                                {index !== footerLinks.length - 1 && (
                                    <span class="mx-2"> | </span>
                                )}
                            </p>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer