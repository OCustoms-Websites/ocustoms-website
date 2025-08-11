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
            
        </div>
    )
})

export default Templates
