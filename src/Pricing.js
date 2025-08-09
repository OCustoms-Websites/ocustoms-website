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
                <div className="flex flex-col py-4 px-10 rounded-lg bg-slate-200 shadow-lg">
                    <div className="font-medium">
                        Starter
                    </div>
                    <div className="font-black mt-2 text-4xl text-blue-700">
                        $XX/mo
                    </div>
                    <div className="font-semibold mb-4">
                        Great for solo advisors getting online.
                    </div>
                    <Link to="#contact" className="py-2 px-36 bg-blue-700 text-white items-center rounded-lg">
                        Get Started
                    </Link>
                </div>
                <div className="flex flex-col py-4 px-10 rounded-lg bg-slate-200 shadow-lg">
                    <div className="font-medium">
                        Pro
                    </div>
                    <div className="font-black mt-2 text-4xl text-blue-700">
                        $XX/mo
                    </div>
                    <div className="font-semibold mb-4">
                        Advanced templates, analytics, priority support.
                    </div>
                    <Link to="#contact" className="py-2 px-36 bg-blue-700 text-white items-center rounded-lg">
                        Get Started
                    </Link>
                </div>
                <div className="flex flex-col py-4 px-10 rounded-lg bg-slate-200 shadow-lg">
                    <div className="font-medium">
                        Agency
                    </div>
                    <div className="font-black mt-2 text-4xl text-blue-700">
                        Custom
                    </div>
                    <div className="font-semibold mb-4">
                        Multi-advisor & multi-site options.
                    </div>
                    <Link to="#contact" className="py-2 px-36 bg-blue-700 text-white items-center rounded-lg">
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className="text-xs mt-4">
                *Prices are placeholders—update before launch.*
            </div>
        </div>
    )
})

export default Pricing
