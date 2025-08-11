import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col items-center p-10 bg-white">
            <div className="text-center font-semibold text-blue-700 mb-4 text-xs">
                PRICING
            </div>
            <div className="text-3xl font-bold text-center">
                Simple monthly plans
            </div>
            <div className="text-center mt-2">
                Pause or cancel anytime. No long-term contracts.
            </div>
            <div className='flex flex-row gap-10 mt-16'>
                <div className="flex flex-col py-4 px-10 rounded-lg bg-slate-200 shadow-lg w-[360px] min-h-[220px] transform transition-transform duration-500 ease-out hover:scale-[1.15] hover:shadow-xl hover:z-10">
                    <div className="font-medium">
                        Pro
                    </div>
                    <div className="font-black mt-2 text-4xl text-blue-700">
                    $149/mo
                    </div>
                    <div className="font-semibold mb-4">
                        Great for solo advisors.
                    </div>
                    <a href="https://calendly.com/ocustomsllc-info/30min" className="py-2 bg-blue-700 text-white items-center rounded-lg w-full text-center">
                        Contact Us
                    </a>
                </div>
                <div className="flex flex-col py-4 px-10 rounded-lg bg-slate-200 shadow-lg w-[360px] min-h-[220px] transform transition-transform duration-500 ease-out hover:scale-[1.15] hover:shadow-xl hover:z-10">
                    <div className="font-medium">
                        Agency
                    </div>
                    <div className="font-black mt-2 text-4xl text-blue-700">
                        Custom
                    </div>
                    <div className="font-semibold mb-4">
                        Multi-advisor & multi-site options.
                    </div>
                    <a href="https://calendly.com/ocustomsllc-info/30min" className="py-2 bg-blue-700 text-white items-center rounded-lg w-full text-center">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className="text-xs mt-4">
                *Prices are placeholders—update before launch.*
            </div>
        </div>
    )
})

export default Pricing
