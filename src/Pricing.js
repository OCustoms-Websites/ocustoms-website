import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex flex-col items-center p-10 bg-white">
            <div className="text-center font-semibold text-blue-700 mb-4 text-xs">
                PRICING
            </div>
            <div className="text-3xl font-bold text-center">
                Smart <i className="text-blue-700">Investment</i> for Smart Browsing
            </div>
            <div className='flex flex-row gap-10 mt-16'>
                <div className="flex flex-col py-4 px-10 rounded-lg bg-slate-200 shadow-lg">
                    <div className="font-medium">
                        Basic Plan
                    </div>
                    <div className="font-black mt-2 text-4xl text-blue-700">
                        Free
                    </div>
                    <div className="font-semibold mb-4">
                        What's included:
                    </div>
                    <div className="mb-2">
                        20 Focus Sessions / Month
                    </div>
                    <div className=" mb-16">
                        GPT-3.5 Focus Assistant
                    </div>
                    <Link to="/download" className="py-2 px-36 bg-blue-700 text-white items-center rounded-lg">
                        Get Started
                    </Link>
                </div>
                <div className="flex flex-col py-4 px-10 rounded-lg bg-slate-200 shadow-lg">
                    <div className="font-medium">
                        Premium Plan
                    </div>
                    <div className="font-black mt-2 text-4xl text-blue-700">
                        $9.99 / Month
                    </div>
                    <div className="font-semibold mb-4">
                        What's included:
                    </div>
                    <div className="mb-2">
                        Unlimited Focus Sessions
                    </div>
                    <div className=" mb-2">
                        GPT-4o Mini Focus Assistant
                    </div>
                    <Link to="/download" className="py-2 px-36 bg-blue-700 text-white items-center rounded-lg">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    )
})

export default Pricing