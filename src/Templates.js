import React from 'react';

const Templates = React.forwardRef((props, ref) => {
    return (
        <div id="templates" ref={ref} className="flex flex-col items-center p-10 bg-slate-200">
            <div className="text-3xl font-bold text-center">
                Pick a template, we tailor it to you.
            </div>
            <div className="mt-4 text-center">
                We customize color, typography, and imagery to match your brand—no design work needed.
            </div>
            <div className="flex flex-row gap-4 mt-8">
                <a href="#templates" className="py-3 px-6 font-semibold rounded-lg bg-blue-700 text-white">See Templates</a>
                <a href="#contact" className="py-3 px-6 font-semibold rounded-lg border border-blue-700 text-blue-700">Get a Demo</a>
            </div>
        </div>
    )
})

export default Templates
